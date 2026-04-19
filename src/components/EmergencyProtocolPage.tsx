import { motion } from 'motion/react';
import { EmergencyProtocol } from '../types';
import { ChevronLeft, ArrowRight, Lightbulb, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { useEmergencyTimer } from '../hooks/useEmergencyTimer';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface EmergencyProtocolPageProps {
  protocol: EmergencyProtocol;
  onBack: () => void;
}

export default function EmergencyProtocolPage({ protocol, onBack }: EmergencyProtocolPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { timeLeft, progress, reset } = useEmergencyTimer(60);

  const nextStep = () => {
    if (currentStep < protocol.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      reset(60);
    } else {
      onBack();
    }
  };

  const step = protocol.steps[currentStep];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[60] bg-background overflow-y-auto px-6 py-12"
    >
      <button onClick={onBack} className="mb-8 text-primary flex items-center gap-2">
        <ChevronLeft className="w-5 h-5" />
        <span className="uppercase text-xs font-bold tracking-widest">Sair do Protocolo</span>
      </button>

      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn("w-3 h-3 rounded-full animate-pulse shadow-[0_0_12px]", 
            protocol.color === 'orange' ? 'bg-orange-500 shadow-orange-500/40' : 
            protocol.color === 'blue' ? 'bg-blue-400 shadow-blue-400/40' : 'bg-on-surface/40')
          } />
          <Badge variant="surface">Protocolo Ativado</Badge>
        </div>
        
        <h1 className="text-4xl font-bold font-serif mb-12">{protocol.title}</h1>

        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card variant="lowest" className="p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <Badge variant="primary" className="mb-1 w-fit bg-transparent p-0">Passo {currentStep + 1} de {protocol.steps.length}</Badge>
                <h3 className="text-2xl font-serif">{step.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-md">
              {step.description}
            </p>

            <div className="relative flex flex-col items-center justify-center py-10">
              <svg className="w-48 h-48 -rotate-90">
                <circle className="text-surface-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="4" />
                <circle 
                  className="text-primary drop-shadow-[0_0_8px_rgba(223,183,255,0.3)] transition-all duration-1000" 
                  cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" 
                  strokeDasharray="552" 
                  strokeDashoffset={552 - (552 * progress) / 100} 
                  strokeWidth="6" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-5xl font-bold">{timeLeft}</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Segundos</span>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button 
                variant="gradient"
                onClick={nextStep}
                className="flex items-center gap-3"
              >
                <span>{currentStep === protocol.steps.length - 1 ? 'Concluir Protocolo' : 'Próximo Passo'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="glass-panel p-6 rounded-2xl flex gap-4 items-start">
          <Lightbulb className="w-6 h-6 text-tertiary flex-shrink-0" />
          <p className="text-sm italic text-on-surface-variant">"{protocol.supportQuote}"</p>
        </div>
      </div>
    </motion.div>
  );
}
