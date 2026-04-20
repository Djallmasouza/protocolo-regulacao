import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProgress } from '../types';
import { Settings, History, Bell, Info, Sparkles, LogOut, Shield, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProfileProps {
  progress: UserProgress;
  onReset: () => void;
}

export default function Profile({ progress, onReset }: ProfileProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    { title: 'Minha Janela de Tolerância', icon: Shield, content: 'Sua janela de tolerância é o estado em que você consegue processar emoções sem entrar em hiper ou hipo-excitação.' },
    { title: 'Histórico de Rituais', icon: History, content: `Você já concluiu ${progress.completedRituals.length} rituais. Cada passo é uma vitória na sua jornada de autoconhecimento.` },
    { title: 'Notificações', icon: Bell, content: 'Suas notificações de rituais diários e lembretes de regulação somática aparecerão aqui.' },
    { title: 'Sobre o Método', icon: Info, content: 'O Protocolo de Regulação utiliza neurociência e práticas ancestrais para ajudar na interação emocional e segurança somática.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-lg mx-auto"
    >
      <section className="flex flex-col items-center mb-12">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary-container/20 blur-[40px] rounded-full" />
          <div className="w-32 h-32 rounded-full border-2 border-primary/20 p-1 flex items-center justify-center relative z-10 bg-background">
            <div className="w-full h-full rounded-full bg-surface-high flex items-center justify-center text-primary text-4xl font-serif font-bold">
              GA
            </div>
          </div>
          <div className="absolute -bottom-2 -right-4 bg-tertiary px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(233,195,73,0.4)] z-20">
            <span className="text-on-tertiary text-[10px] font-extrabold uppercase tracking-widest">Guerreira</span>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-on-surface">Minha Jornada</h2>
          <div className="flex items-center justify-center gap-2 text-on-surface-variant/80 mt-1">
             <Sparkles className="w-4 h-4 text-tertiary" />
             <p className="text-sm font-medium tracking-wide">Ativa no Protocolo</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-surface-low p-6 rounded-2xl border border-on-surface/5 flex flex-col justify-between h-36">
          <Sparkles className="w-6 h-6 text-primary" />
          <div>
            <p className="text-3xl font-bold font-serif">{progress.completedRituals.length}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Rituais Concluídos</p>
          </div>
        </div>
        <div className="bg-surface-low p-6 rounded-2xl border border-on-surface/5 flex flex-col justify-between h-36">
           <Sparkles className="w-6 h-6 text-tertiary" />
           <div>
            <p className="text-3xl font-bold font-serif">Nível {Math.min(4, Math.floor(progress.completedRituals.length / 2) + 1)}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Estado de Presença</p>
          </div>
        </div>
      </div>

      <section className="space-y-3 mb-16">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-on-surface-variant/60 ml-2 mb-4">Gerenciamento</h3>
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              onClick={() => setActiveItem(item.title)}
              className="w-full flex items-center justify-between p-5 bg-surface-low rounded-2xl border border-on-surface/5 hover:bg-surface-high transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-highest flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-on-surface-variant/40" />
            </button>
          );
        })}
        
        <button 
          onClick={onReset}
          className="w-full flex items-center gap-4 p-5 text-error mt-8 opacity-60 hover:opacity-100 transition-opacity"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-bold uppercase tracking-widest">Reiniciar Jornada</span>
        </button>
      </section>

      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-surface-low p-8 rounded-3xl border border-on-surface/10 w-full max-w-sm shadow-2xl"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                {activeItem}
              </h3>
              <div className="text-on-surface-variant">
                <p>{menuItems.find(i => i.title === activeItem)?.content}</p>
                <p className="mt-4 text-sm italic opacity-60">Conteúdo em processo de autoconhecimento.</p>
              </div>
              <button 
                onClick={() => setActiveItem(null)}
                className="mt-8 w-full py-3 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="text-center px-8">
        <p className="font-serif italic text-tertiary text-lg leading-relaxed opacity-90">
          “A sombra não é um monstro. É o reservatório da sua vitalidade.”
        </p>
      </footer>
    </motion.div>
  );
}
