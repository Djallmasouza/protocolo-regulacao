import { motion, AnimatePresence } from 'motion/react';
import { SOMATIC_POINTS } from '../constants/content';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { SomaticPoint } from '../types';
import { PointDetailCard } from '../components/Map/PointDetailCard';

import { HumanSilhouette } from '../components/Map/HumanSilhouette';

interface MapProps {
  onRegister: (pointId: string) => void;
}

export default function SomaticMap({ onRegister }: MapProps) {
  const [selectedPoint, setSelectedPoint] = useState<SomaticPoint | null>(null);

  const points = SOMATIC_POINTS;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="relative min-h-[calc(100vh-160px)] flex flex-col items-center"
    >
      <header className="w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">Onde Vive sua Dor</h2>
        <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold mt-2">
          Escaneamento Somático • Frequência Cardíaca
        </p>
      </header>

      <div className="relative w-full max-w-lg aspect-[2/3] flex justify-center items-center">
        {/* Reliable SVG Silhouette */}
        <div className="absolute inset-0 z-0">
          <HumanSilhouette />
        </div>

        {/* Interactive Points */}
        {points.map((point) => (
          <BodyPoint 
            key={point.id} 
            point={point} 
            isSelected={selectedPoint?.id === point.id} 
            onClick={() => setSelectedPoint(point)} 
          />
        ))}

        {/* Focus Detail Card */}
        <AnimatePresence>
          {selectedPoint && (
            <PointDetailCard 
              point={selectedPoint} 
              onRegister={() => onRegister(selectedPoint.id)} 
            />
          )}
        </AnimatePresence>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </motion.div>
  );
}

const BodyPoint = ({ point, isSelected, onClick }: { point: SomaticPoint, isSelected: boolean, onClick: () => void, key?: string }) => (
  <button
    onClick={onClick}
    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
    style={{ top: point.top, left: point.left }}
  >
    <div className={cn(
      "transition-all duration-500 rounded-full flex items-center justify-center cursor-pointer",
      isSelected 
        ? "w-8 h-8 bg-tertiary shadow-[0_0_20px_rgba(233,195,73,0.6)]" 
        : "w-4 h-4 bg-surface-highest border border-on-surface/10 hover:scale-125"
    )}>
      {isSelected && (
        <Heart className="w-4 h-4 text-on-tertiary fill-current" />
      )}
    </div>
    
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-low border border-on-surface/5 px-3 py-1 rounded-lg text-[10px] uppercase tracking-widest text-on-surface-variant whitespace-nowrap z-20 pointer-events-none">
      {point.name}
    </div>
  </button>
);
