import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RITUALS } from '../constants/content';
import { HistoryIcon, Brain } from 'lucide-react';
import { UserProgress } from '../types';
import { JourneyStatusCard } from '../components/Home/JourneyStatusCard';
import { TodayTaskCard } from '../components/Home/TodayTaskCard';
import { Card } from '../components/ui/Card';

interface HomeProps {
  progress: UserProgress;
  onStartRitual: (day: number) => void;
}

export default function Home({ progress, onStartRitual }: HomeProps) {
  const currentRitual = RITUALS.find(r => r.day === progress.currentDay) || RITUALS[0];
  const interactionPercentage = Math.round((progress.completedRituals.length / 7) * 100);
  const [activeModal, setActiveModal] = useState<'registros' | 'insight' | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <header className="mb-12 pt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-2 font-serif">Olá, Guerreira</h2>
        <p className="text-on-surface text-lg font-light opacity-80 max-w-[280px]">Sua sombra está sendo vista.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <JourneyStatusCard 
          currentDay={progress.currentDay} 
          interactionPercentage={interactionPercentage} 
        />

        <TodayTaskCard 
          ritual={currentRitual} 
          onStart={() => onStartRitual(progress.currentDay)} 
        />

        <section className="grid grid-cols-2 gap-4">
          <StatCard 
            icon={HistoryIcon} 
            title="Registros" 
            subtitle={`${progress.completedRituals.length} sombras documentadas`} 
            onClick={() => setActiveModal('registros')}
          />
          <StatCard 
            icon={Brain} 
            title="Insight" 
            subtitle="Equilíbrio emocional" 
            onClick={() => setActiveModal('insight')}
          />
        </section>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-surface-low p-8 rounded-3xl border border-on-surface/10 w-full max-w-sm shadow-2xl"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                {activeModal === 'registros' ? 'Meus Registros' : 'Insight Diário'}
              </h3>
              <div className="text-on-surface-variant space-y-4">
                {activeModal === 'registros' ? (
                  <p>Aqui você verá o histórico de todas as sombras que documentou durante sua jornada de autoconhecimento.</p>
                ) : (
                  <p>Sua regulação somática está evoluindo. Continue ouvindo o que seu corpo tem a dizer.</p>
                )}
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="mt-8 w-full py-3 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const StatCard = ({ icon: Icon, title, subtitle, onClick }: { icon: any, title: string, subtitle: string, onClick: () => void }) => (
  <button onClick={onClick} className="text-left w-full group">
    <Card className="p-5 transition-all group-hover:bg-surface-high active:scale-95">
      <Icon className="w-6 h-6 text-tertiary mb-3 group-hover:scale-110 transition-transform" />
      <h4 className="text-on-surface text-sm font-bold">{title}</h4>
      <p className="text-xs text-on-surface-variant mt-1">{subtitle}</p>
    </Card>
  </button>
);
