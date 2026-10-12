import React, { useState } from 'react';
import { Sparkles, HelpCircle, ChevronRight, HeartHandshake, ShieldCheck, Waves } from 'lucide-react';
import { playTibetanBell } from '../utils/sound';
import { TreatmentType } from '../types/reiki';

interface WelcomeBannerProps {
  onSelectAction: (tab: 'manual' | 'chakras' | 'journal' | 'principles', mode?: TreatmentType) => void;
  onStartSession: (type: TreatmentType) => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  onSelectAction,
  onStartSession,
}) => {
  const [isReminderOpen, setIsReminderOpen] = useState<boolean>(true);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-stone-100 p-6 md:p-10 border border-stone-800 shadow-xl">
      {/* Sacred ambient light orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-4xl">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recordatorio Esencial para Iniciados en Reiki Nivel 1 (Shoden)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Tu canal sigue intacto: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-300">
              Vuelve a conectar con tus manos
            </span>
          </h1>

          <p className="text-sm md:text-base text-stone-300 leading-relaxed max-w-2xl">
            Aunque sientas que «se te olvidó todo», la sintonización de Reiki nunca se pierde. Tu cuerpo recuerda la frecuencia. Solo necesitas repasar las posiciones de las manos, fijar tu intención con las oraciones sugeridas y confiar en la sabiduría de la energía.
          </p>
        </div>

        {/* 3 Pillars reminder cards */}
        {isReminderOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1.5 backdrop-blur-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold font-mono">
                01
              </div>
              <h4 className="font-serif font-bold text-stone-100 text-sm">
                Tú eres un canal (Bambú vacío)
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                No usas tu energía personal ni te desgastas. La energía universal (Rei) entra por tu coronilla y sale por tus palmas hacia el receptor.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1.5 backdrop-blur-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold font-mono">
                02
              </div>
              <h4 className="font-serif font-bold text-stone-100 text-sm">
                Manos suaves y relajadas
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Dedos juntos sin tensión, palmas en ligera concavidad. Puedes apoyar suavemente o levitar a 3-5 cm si la zona lo requiere.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1.5 backdrop-blur-xs">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold font-mono">
                03
              </div>
              <h4 className="font-serif font-bold text-stone-100 text-sm">
                La intención activa el flujo
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Basta con unir las manos en Gassho, recitar la oración mental de apertura y decir: «Pido ser un canal puro para el mayor bien».
              </p>
            </div>
          </div>
        )}

        {/* Quick Launch Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              playTibetanBell(1.0);
              onStartSession('self');
            }}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs md:text-sm shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Practicar Autotratamiento Guiado
          </button>

          <button
            onClick={() => {
              playTibetanBell(1.15);
              onSelectAction('manual', 'others');
            }}
            className="px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs md:text-sm transition-all flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            Ver Manual para Otras Personas
          </button>

          <button
            onClick={() => {
              playTibetanBell(1.1);
              onSelectAction('chakras');
            }}
            className="px-4 py-3 rounded-2xl bg-stone-900/60 hover:bg-stone-800 text-stone-300 text-xs font-medium transition-all flex items-center gap-1.5"
          >
            <span>Infografía de Chakras & Colores</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
