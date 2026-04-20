import { Play, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Ritual } from '../../types';

interface TodayTaskCardProps {
  ritual: Ritual;
  onStart: () => void;
}

export const TodayTaskCard = ({ ritual, onStart }: TodayTaskCardProps) => (
  <Card className="p-6 group hover:bg-surface-high">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-surface-highest flex items-center justify-center text-tertiary">
          <Play className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h3 className="text-on-surface font-bold">Seu Ritual de Hoje</h3>
          <p className="text-xs text-on-surface-variant font-serif italic">{ritual.name}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-on-surface-variant/40" />
    </div>

    <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-indigo-950 via-purple-900 to-amber-900/30 flex items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent" />
      <p className="relative z-10 text-white italic opacity-80 text-[15px] leading-relaxed">
        "{ritual.objective}"
      </p>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-low via-transparent to-transparent" />
    </div>

    <Button 
      variant="gradient"
      onClick={onStart}
      className="w-full"
    >
      Iniciar Ritual do Dia {ritual.day}
    </Button>
  </Card>
);
