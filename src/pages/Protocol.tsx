import { motion } from 'motion/react';
import { EMERGENCY_PROTOCOLS } from '../constants/content';
import { AlertTriangle, ChevronRight, Zap, Snowflake, Ghost } from 'lucide-react';
import { cn } from '../lib/utils';
import { EmergencyProtocol } from '../types';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

interface ProtocolProps {
  onSelectProtocol: (protocol: EmergencyProtocol) => void;
}

export default function Protocol({ onSelectProtocol }: ProtocolProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 text-tertiary drop-shadow-[0_0_8px_rgba(233,195,73,0.3)]" />
          <Badge variant="tertiary">Acesso Imediato</Badge>
        </div>
        <h2 className="text-4xl font-bold font-serif tracking-tight mb-8">Estou em Colapso</h2>

        <div className="grid grid-cols-1 gap-4">
          {EMERGENCY_PROTOCOLS.map((protocol) => (
            <ProtocolCard 
              key={protocol.id} 
              protocol={protocol} 
              isFullWidth={true} 
              onClick={() => onSelectProtocol(protocol)} 
            />
          ))}
        </div>
      </section>

      <Card variant="high" className="p-8 border-primary/20 bg-primary-container/10">
        <h3 className="text-xl font-bold mb-4 font-serif text-primary">O que é a Janela de Tolerância?</h3>
        <p className="text-on-surface-variant leading-relaxed">
          Seu sistema nervoso flutua entre estados de hiper-excitação (luta/fuga) e hipo-excitação (colapso). 
          Estes protocolos ajudam você a voltar para a "janela" onde o apoio acontece.
        </p>
      </Card>
    </motion.div>
  );
}

const icons = {
  flooding: Zap,
  freeze: Snowflake,
  collapse: Ghost
};

const ProtocolCard = ({ protocol, isFullWidth, onClick }: { protocol: EmergencyProtocol, isFullWidth: boolean, onClick: () => void, key?: string }) => {
  const Icon = icons[protocol.id as keyof typeof icons] || Zap;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-surface-low p-6 rounded-2xl flex transition-all duration-400 hover:bg-surface-high border border-on-surface/5 group relative overflow-hidden",
        isFullWidth ? "col-span-2 items-center justify-between" : "flex-col gap-8 items-start justify-between h-44"
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-3 h-3 rounded-full shadow-[0_0_12px]",
          protocol.color === 'orange' ? 'bg-orange-500 shadow-orange-500/40' : 
          protocol.color === 'blue' ? 'bg-blue-400 shadow-blue-400/40' : 'bg-on-surface/40'
        )} />
        <span className="text-xl font-bold font-serif">{protocol.title}</span>
      </div>
      
      <div className={cn(
        "flex items-center justify-center p-3 rounded-xl bg-surface-highest group-hover:bg-primary/20 transition-colors",
        !isFullWidth && "self-end"
      )}>
        {isFullWidth ? <ChevronRight className="w-5 h-5 text-on-surface-variant/40 group-hover:translate-x-1 transition-transform" /> : <Icon className="w-5 h-5 text-primary" />}
      </div>

      {isFullWidth && (
         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      )}
    </button>
  );
};
