import { Home, Map as MapIcon, BookOpen, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Casa', icon: Home },
    { id: 'map', label: 'Mapa', icon: MapIcon },
    { id: 'protocol', label: 'Protocolo', icon: BookOpen },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-3xl z-50 flex justify-around items-center px-8 pb-4 border-t border-on-surface/5 rounded-t-[2rem] shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300 active:scale-95",
              isActive 
                ? "text-tertiary drop-shadow-[0_0_8px_rgba(233,195,73,0.3)]" 
                : "text-on-surface/40 hover:text-primary"
            )}
          >
            <Icon className={cn("w-6 h-6 mb-1", isActive && "fill-current")} />
            <span className="text-[10px] uppercase tracking-[5%] font-medium">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
