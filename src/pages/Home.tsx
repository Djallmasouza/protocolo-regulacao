import { motion } from 'motion/react';
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
  const integrationPercentage = Math.round((progress.completedRituals.length / 7) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <header className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-2 font-serif">Olá, Guerreira</h2>
        <p className="text-on-surface text-lg font-light opacity-80 max-w-[280px]">Sua sombra está sendo vista.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <JourneyStatusCard 
          currentDay={progress.currentDay} 
          integrationPercentage={integrationPercentage} 
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
          />
          <StatCard 
            icon={Brain} 
            title="Insight" 
            subtitle="Sua mente está em equilíbrio" 
          />
        </section>
      </div>
    </motion.div>
  );
}

const StatCard = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
  <Card className="p-5">
    <Icon className="w-6 h-6 text-tertiary mb-3" />
    <h4 className="text-on-surface text-sm font-bold">{title}</h4>
    <p className="text-xs text-on-surface-variant mt-1">{subtitle}</p>
  </Card>
);
