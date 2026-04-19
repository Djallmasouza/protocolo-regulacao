import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';

interface JourneyStatusCardProps {
  currentDay: number;
  integrationPercentage: number;
}

export const JourneyStatusCard = ({ currentDay, integrationPercentage }: JourneyStatusCardProps) => (
  <Card variant="primary" className="p-8 relative overflow-hidden group border-none">
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
    <div className="relative z-10">
      <span className="text-[10px] uppercase font-bold text-on-primary-container/60 mb-4 block tracking-widest">
        Estado da Jornada
      </span>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-7xl font-bold text-on-primary-container font-serif">{currentDay}</span>
        <span className="text-xl font-light text-on-primary-container/70">Dia atual</span>
      </div>
      
      <div className="w-full space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-xs font-semibold text-on-primary-container">{integrationPercentage}% de integração</span>
          <Sparkles className="w-4 h-4 text-tertiary" />
        </div>
        <div className="h-1.5 w-full bg-on-primary/20 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${integrationPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-tertiary rounded-full shadow-[0_0_12px_rgba(233,195,73,0.4)]" 
          />
        </div>
      </div>
    </div>
  </Card>
);
