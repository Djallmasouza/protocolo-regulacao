import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

interface RitualReflectionCardProps {
  reflection: string;
  technique: string;
  onComplete: () => void;
  key?: string | number;
}

export const RitualReflectionCard = ({ reflection, technique, onComplete }: RitualReflectionCardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="space-y-8"
  >
    <Card className="bg-tertiary/10 border-tertiary/20 p-8">
      <Badge variant="tertiary" className="mb-4">Arqueologia Emocional</Badge>
      <p className="text-xl font-serif italic mb-4">"{reflection}"</p>
      <p className="text-sm text-on-surface-variant">Reflita sobre esta pergunta ou escreva no seu diário.</p>
    </Card>

    <Card variant="high" className="p-8">
      <Badge variant="secondary" className="mb-4">Técnica Somática</Badge>
      <p className="text-lg">{technique}</p>
    </Card>

    <Button 
      variant="gradient"
      onClick={onComplete}
      className="w-full py-5 flex items-center justify-center gap-3"
    >
      <CheckCircle2 className="w-6 h-6" />
      Concluir Ritual
    </Button>
  </motion.div>
);
