import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    title: 'Bem-vinda ao Protocolo',
    description: 'Uma jornada de 7 dias desenhada para integrar sua sombra e regular seu sistema nervoso através da arqueologia emocional.',
    icon: Sparkles,
    color: 'text-tertiary',
    bg: 'bg-tertiary/10'
  },
  {
    title: 'A Escuta do Corpo',
    description: 'Aqui, seu corpo é o mapa. Através de técnicas somáticas, vamos liberar tensões que você carrega há anos sem perceber.',
    icon: HeartPulse,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Segurança em Primeiro Lugar',
    description: 'Use o Protocolo de Emergência sempre que se sentir sobrecarregada. Estamos aqui para garantir que seu processo seja seguro e gentil.',
    icon: ShieldCheck,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  }
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  const Icon = slides[current].icon;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col items-center text-center max-w-sm"
        >
          <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8", slides[current].bg)}>
            <Icon className={cn("w-10 h-10", slides[current].color)} />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 font-serif">{slides[current].title}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {slides[current].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-primary" : "w-1.5 bg-on-surface/20"
            )}
          />
        ))}
      </div>

      <button
        onClick={next}
        className="mt-12 flex items-center gap-2 bg-on-surface text-background px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm active:scale-95 transition-transform"
      >
        {current === slides.length - 1 ? 'Começar Jornada' : 'Próximo'}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
