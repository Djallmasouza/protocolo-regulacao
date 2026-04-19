import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SomaticPoint } from '../../types';

interface PointDetailCardProps {
  point: SomaticPoint;
  onRegister: () => void;
}

export const PointDetailCard = ({ point, onRegister }: PointDetailCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[300px] z-30"
  >
    <Card variant="low" className="backdrop-blur-xl border-on-surface/10 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-4 bg-tertiary rounded-full" />
        <Badge variant="tertiary" className="bg-transparent p-0">Ponto de Tensão</Badge>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 font-serif">{point.emotion}</h3>
      <p className="text-on-surface-variant italic leading-relaxed text-sm mb-6">
        "{point.reflection}"
      </p>

      <Button 
        variant="gradient"
        onClick={onRegister}
        className="w-full text-[11px]"
      >
        Registrar no Diário
      </Button>
    </Card>
  </motion.div>
);
