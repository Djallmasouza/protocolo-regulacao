import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface RitualStepCardProps {
  stepIndex: number;
  totalSteps: number;
  content: string;
  onNext: () => void;
  key?: string | number;
}

export const RitualStepCard = ({ stepIndex, totalSteps, content, onNext }: RitualStepCardProps) => (
  <motion.div 
    key={stepIndex}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <Card variant="low" className="p-8">
      <Badge variant="primary" className="mb-4">
        Passo {stepIndex + 1} de {totalSteps}
      </Badge>
      <p className="text-2xl leading-relaxed">{content}</p>
      <Button 
        onClick={onNext}
        className="mt-8 w-full"
      >
        Próximo Passo
      </Button>
    </Card>
  </motion.div>
);
