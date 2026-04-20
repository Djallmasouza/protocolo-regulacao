import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Ritual, EmergencyProtocol } from './types';
import { RITUALS } from './constants/content';
import BottomNav from './components/BottomNav';
import Onboarding from './components/Onboarding';
import Home from './pages/Home';
import Map from './pages/Map';
import Protocol from './pages/Protocol';
import Profile from './pages/Profile';
import RitualPage from './components/RitualPage';
import EmergencyProtocolPage from './components/EmergencyProtocolPage';
import { Menu } from 'lucide-react';
import { useUserProgress } from './hooks/useUserProgress';

export default function App() {
  const { 
    progress, 
    completeRitual, 
    setLastSomaticPoint, 
    markOnboardingAsSeen, 
    resetProgress 
  } = useUserProgress();

  const [activeTab, setActiveTab] = useState('home');
  const [activeRitual, setActiveRitual] = useState<Ritual | null>(null);
  const [activeProtocol, setActiveProtocol] = useState<EmergencyProtocol | null>(null);

  const handleStartRitual = (day: number) => {
    const ritual = RITUALS.find(r => r.day === day) || RITUALS[0];
    setActiveRitual(ritual);
  };

  const handleRegisterSomatic = (pointId: string) => {
    setLastSomaticPoint(pointId);
    alert('Ponto registrado no diário somático com sucesso.');
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja reiniciar sua jornada? Todos os dados serão perdidos.')) {
      resetProgress();
      setActiveTab('home');
    }
  };

  if (!progress.onboardingSeen) {
    return <Onboarding onComplete={markOnboardingAsSeen} />;
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary-container/30">
      <Header />

      <main className="pt-24 pb-32 px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <div key="home">
              <Home progress={progress} onStartRitual={handleStartRitual} />
            </div>
          )}
          {activeTab === 'map' && (
            <div key="map">
              <Map onRegister={handleRegisterSomatic} />
            </div>
          )}
          {activeTab === 'protocol' && (
            <div key="protocol">
              <Protocol onSelectProtocol={setActiveProtocol} />
            </div>
          )}
          {activeTab === 'profile' && (
            <div key="profile">
              <Profile progress={progress} onReset={handleReset} />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Overlays */}
      <AnimatePresence>
        {activeRitual && (
          <RitualPage 
            ritual={activeRitual} 
            onBack={() => setActiveRitual(null)} 
            onComplete={() => {
              completeRitual(activeRitual.day);
              setActiveRitual(null);
            }}
          />
        )}
        {activeProtocol && (
          <EmergencyProtocolPage 
            protocol={activeProtocol}
            onBack={() => setActiveProtocol(null)}
          />
        )}
      </AnimatePresence>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      <BackgroundGlows />
    </div>
  );
}

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-2xl border-b border-on-surface/5">
    <div className="flex justify-center items-center px-6 py-4 max-w-2xl mx-auto">
      <h1 className="font-serif text-2xl font-bold text-primary">Protocolo de Regulação</h1>
    </div>
  </header>
);

const BackgroundGlows = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-tertiary-container/5 rounded-full blur-[100px]" />
  </div>
);
