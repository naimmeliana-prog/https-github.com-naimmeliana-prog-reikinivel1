import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  Feather, 
  Award, 
  Volume2, 
  Music, 
  Play
} from 'lucide-react';
import { playTibetanBell, ambientSound } from '../utils/sound';

export type NavTab = 'manual' | 'chakras' | 'journal' | 'principles';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenGuidedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenGuidedModal,
}) => {
  const [ambientActive, setAmbientActive] = React.useState<boolean>(false);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setAmbientActive(active);
  };

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'manual', label: 'Manual de Manos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'chakras', label: 'Chakras & Colores', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'journal', label: 'Diario de Sesiones', icon: <Feather className="w-4 h-4" /> },
    { id: 'principles', label: 'Principios & Constancia', icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & App Title */}
          <div 
            onClick={() => onTabChange('manual')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform">
              <span className="font-serif text-lg">霊</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base md:text-lg tracking-wide text-stone-100">
                  Reiki Shoden
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700/50">
                  Nivel 1
                </span>
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                Imposición de Manos, Chakras y Diario
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-950/60 p-1.5 rounded-2xl border border-stone-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    playTibetanBell(1.05);
                    onTabChange(item.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Sound & Practice CTAs */}
          <div className="flex items-center gap-2">
            {/* Bell chime button */}
            <button
              onClick={() => playTibetanBell(1.0)}
              className="p-2 md:px-3 md:py-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-300 text-xs flex items-center gap-1.5 border border-stone-700/60 transition-all"
              title="Tocar campana tibetana zen"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span className="hidden lg:inline text-[11px]">Campana</span>
            </button>

            {/* Ambient 432Hz button */}
            <button
              onClick={toggleSound}
              className={`p-2 md:px-3 md:py-2 rounded-xl text-xs flex items-center gap-1.5 border transition-all ${
                ambientActive
                  ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md animate-pulse'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border-stone-700/60'
              }`}
              title="Música armónica 432Hz para meditar"
            >
              <Music className="w-4 h-4" />
              <span className="hidden lg:inline text-[11px]">{ambientActive ? '432Hz On' : '432Hz'}</span>
            </button>

            {/* Guided Session CTA */}
            <button
              onClick={onOpenGuidedModal}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:scale-102"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Sesión Guiada</span>
              <span className="sm:hidden">Practicar</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around py-2.5 border-t border-stone-800 text-xs">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playTibetanBell(1.05);
                  onTabChange(item.id);
                }}
                className={`flex flex-col items-center gap-1 p-1 transition-all ${
                  isActive ? 'text-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {item.icon}
                <span className="text-[10px]">{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
