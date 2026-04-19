import { motion, AnimatePresence } from 'motion/react';
import { Ritual } from '../types';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { RitualStepCard } from './Ritual/RitualStepCard';
import { RitualReflectionCard } from './Ritual/RitualReflectionCard';

interface RitualPageProps {
  ritual: Ritual;
  onBack: () => void;
  onComplete: () => void;
}

export default function RitualPage({ ritual, onBack, onComplete }: RitualPageProps) {
  const [step, setStep] = useState(0);

  const isReflectionStep = step === ritual.steps.length;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 z-[60] bg-background overflow-y-auto px-6 py-12"
    >
      <button onClick={onBack} className="mb-8 text-primary flex items-center gap-2">
        <ChevronLeft className="w-5 h-5" />
        <span className="uppercase text-xs font-bold tracking-widest">Voltar</span>
      </button>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.2em] text-tertiary mb-2 font-serif">Ritual do Dia {ritual.day}</h2>
        <h1 className="text-4xl font-bold font-serif mb-6">{ritual.name}</h1>
        
        <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-8">
          <img src={ritual.image} alt={ritual.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="mb-12">
          <p className="text-xl italic font-serif text-on-surface-variant mb-12 text-center">
            "{ritual.objective}"
          </p>

          <AnimatePresence mode="wait">
            {!isReflectionStep ? (
              <RitualStepCard 
                key={`step-${step}`}
                stepIndex={step}
                totalSteps={ritual.steps.length}
                content={ritual.steps[step]}
                onNext={() => setStep(s => s + 1)}
              />
            ) : (
              <RitualReflectionCard 
                key="reflection"
                reflection={ritual.reflection}
                technique={ritual.somaticTechnique}
                onComplete={onComplete}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
