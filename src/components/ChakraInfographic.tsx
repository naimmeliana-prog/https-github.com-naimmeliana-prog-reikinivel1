import React, { useState } from 'react';
import { CHAKRAS_DATA } from '../data/chakrasData';
import { ChakraInfo } from '../types/reiki';
import { Eye, Sparkles, Wind, Flame, Heart, Volume2, ShieldCheck, HelpCircle } from 'lucide-react';
import { playTibetanBell } from '../utils/sound';
import { HandPositionIllustration } from './HandPositionIllustration';

export const ChakraInfographic: React.FC = () => {
  const [selectedChakra, setSelectedChakra] = useState<ChakraInfo>(CHAKRAS_DATA[3]); // Default Anahata
  const [breathingActive, setBreathingActive] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'Inhala Luz...' | 'Sostén...' | 'Exhala y Expande...'>('Inhala Luz...');

  // Start breathing visualization simulation
  const toggleBreathing = () => {
    if (!breathingActive) {
      playTibetanBell(1.1);
      setBreathingActive(true);
      // Breathing cycle 4s in, 4s hold, 4s out
      let step = 0;
      const interval = setInterval(() => {
        step = (step + 1) % 3;
        if (step === 0) setBreathPhase('Inhala Luz...');
        else if (step === 1) setBreathPhase('Sostén...');
        else setBreathPhase('Exhala y Expande...');
      }, 4000);
      // Store in window for cleanup
      (window as unknown as { __reikiBreathInterval?: NodeJS.Timeout }).__reikiBreathInterval = interval;
    } else {
      const interval = (window as unknown as { __reikiBreathInterval?: NodeJS.Timeout }).__reikiBreathInterval;
      if (interval) clearInterval(interval);
      setBreathingActive(false);
    }
  };

  const handleSelect = (chakra: ChakraInfo) => {
    setSelectedChakra(chakra);
    playTibetanBell(0.8 + chakra.number * 0.1);
  };

  return (
    <div className="space-y-8">
      {/* Header Infografía */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900 border border-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Infografía de Chakras & Visualización de Color
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-tight">
          El Mapa Sutil de la Imposición de Manos
        </h2>
        <p className="text-sm md:text-base text-stone-600 leading-relaxed">
          En Reiki Nivel 1, la visualización de los colores no es forzar la mente, sino evocar una frecuencia cromática pura que despierta la autorregulación natural de cada vórtice energético.
        </p>
      </div>

      {/* Main Grid: Interactive Figure & Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Interactive Column 1: Vertical Chakra Column & Body Diagram (5 cols) */}
        <div className="lg:col-span-5 bg-stone-900 rounded-3xl p-6 text-stone-100 border border-stone-800 shadow-xl relative overflow-hidden flex flex-col items-center">
          <div className="w-full flex items-center justify-between pb-4 border-b border-stone-800/80 mb-2">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-mono">Canal Central · Sushumna</span>
            <span className="text-xs text-amber-400/90 font-medium">Toca un chakra</span>
          </div>

          {/* Vertical Chakra Flow */}
          <div className="relative w-full max-w-sm py-4 flex flex-col items-center">
            {/* The Central Energy Axis Line */}
            <div className="absolute top-6 bottom-6 w-1 bg-gradient-to-b from-purple-500 via-emerald-400 to-red-600 rounded-full opacity-60 shadow-[0_0_12px_rgba(255,255,255,0.3)]" />

            {/* Render 7 chakras in descending order (7 Sahasrara at top, 1 Muladhara at bottom) */}
            <div className="w-full space-y-3 relative z-10">
              {[...CHAKRAS_DATA].reverse().map((chk) => {
                const isSelected = selectedChakra.number === chk.number;
                return (
                  <button
                    key={chk.number}
                    onClick={() => handleSelect(chk)}
                    className={`w-full group flex items-center gap-3.5 p-2.5 rounded-2xl transition-all text-left border ${
                      isSelected
                        ? 'bg-stone-800/95 border-amber-400/80 shadow-lg scale-[1.02]'
                        : 'bg-stone-900/60 border-stone-800 hover:bg-stone-800/60 hover:border-stone-700'
                    }`}
                  >
                    {/* Glowing chakra beacon */}
                    <div
                      className={`relative w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                        isSelected ? 'ring-2 ring-white/80 scale-110 shadow-lg' : 'group-hover:scale-105'
                      }`}
                      style={{
                        backgroundColor: chk.colorHex,
                        boxShadow: isSelected ? `0 0 20px ${chk.colorHex}` : 'none',
                      }}
                    >
                      <span className="text-white font-bold text-sm drop-shadow">{chk.number}</span>
                      {isSelected && (
                        <span className="absolute inset-0 rounded-xl animate-ping opacity-40 bg-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-stone-100 truncate group-hover:text-amber-200">
                          {chk.spanishName}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">
                          {chk.sanskritName}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 truncate">{chk.colorName}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full pt-4 mt-2 border-t border-stone-800 text-center text-xs text-stone-400">
            Haz clic en cualquier punto para cargar su visualización y oración
          </div>
        </div>

        {/* Column 2: Detailed Chakra Visualizer & Guided Practice (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Selected Chakra Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm relative overflow-hidden transition-all">
            {/* Ambient Aura Top Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-2 transition-colors duration-500"
              style={{ backgroundColor: selectedChakra.colorHex }}
            />

            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full inline-block shadow-sm"
                    style={{ backgroundColor: selectedChakra.colorHex }}
                  />
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    Chakra #{selectedChakra.number} · {selectedChakra.sanskritName}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {selectedChakra.spanishName}
                </h3>
                <p className="text-sm text-stone-600 mt-0.5">
                  Color sagrado: <strong className="text-stone-800">{selectedChakra.colorName}</strong>
                </p>
              </div>

              {/* Bija Mantra badge */}
              <div className="flex flex-col items-end">
                <span className="text-[11px] text-stone-400 uppercase tracking-wider">Sonido Semilla (Bija)</span>
                <span
                  className="mt-1 px-3 py-1 rounded-xl text-sm font-mono font-bold text-white shadow-sm"
                  style={{ backgroundColor: selectedChakra.colorHex }}
                >
                  {selectedChakra.bijaMantra}
                </span>
              </div>
            </div>

            {/* Quick Properties Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-400 block mb-0.5">Ubicación Física</span>
                <span className="font-medium text-stone-800">{selectedChakra.location}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-400 block mb-0.5">Glándula Endocrina</span>
                <span className="font-medium text-stone-800">{selectedChakra.gland}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 col-span-2 sm:col-span-1">
                <span className="text-stone-400 block mb-0.5">Elemento</span>
                <span className="font-medium text-stone-800">{selectedChakra.element}</span>
              </div>
            </div>

            {/* Affirmation / Prayer Box */}
            <div className="my-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block mb-1">
                Decreto / Afirmación de Sintonía:
              </span>
              <p className="text-stone-800 font-serif italic text-sm md:text-base leading-relaxed">
                {selectedChakra.affirmation}
              </p>
            </div>

            {/* Visualizer Guided Exercise (Requested in prompt) */}
            <div className="mt-5 space-y-4">
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 shadow-inner border border-stone-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-semibold text-stone-100">
                      Ejercicio de Visualización Guiada del Color
                    </h4>
                  </div>
                  <button
                    onClick={toggleBreathing}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                      breathingActive
                        ? 'bg-amber-500 text-stone-900 animate-pulse'
                        : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                    }`}
                  >
                    <Wind className="w-3.5 h-3.5" />
                    {breathingActive ? 'Detener Respiración' : 'Practicar Respiración Guiada'}
                  </button>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed mb-4">
                  {selectedChakra.visualizationExercise}
                </p>

                {/* Breathing Visualizer Pulse Circle */}
                {breathingActive && (
                  <div className="py-4 my-2 flex flex-col items-center justify-center bg-stone-950/70 rounded-xl border border-stone-800">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-3000 ease-in-out"
                      style={{
                        backgroundColor: selectedChakra.colorHex,
                        boxShadow: `0 0 35px ${selectedChakra.colorHex}`,
                        transform: breathPhase === 'Inhala Luz...' ? 'scale(1.3)' : breathPhase === 'Sostén...' ? 'scale(1.35)' : 'scale(0.85)',
                      }}
                    >
                      <span className="text-[11px] font-bold text-white uppercase drop-shadow px-2 text-center">
                        {selectedChakra.bijaMantra}
                      </span>
                    </div>
                    <span className="mt-3 text-xs font-mono tracking-widest text-amber-300 uppercase animate-pulse">
                      {breathPhase}
                    </span>
                  </div>
                )}

                {/* Practical Example */}
                <div className="pt-3 border-t border-stone-800 text-xs text-stone-400 leading-relaxed">
                  <strong className="text-amber-200 font-medium">Ejemplo práctico durante la sesión: </strong>
                  {selectedChakra.practicalExample}
                </div>
              </div>

              {/* Byosen Sensations & Hands Tip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h5 className="text-xs font-semibold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    Sensaciones Táctiles Byosen
                  </h5>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                    {selectedChakra.byosenSensations.map((sen, idx) => (
                      <li key={idx} className="leading-relaxed">{sen}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-semibold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Heart className="w-3.5 h-3.5 text-emerald-600" />
                      Posición Real de Manos para este Chakra
                    </h5>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      {selectedChakra.handPositionTip}
                    </p>
                  </div>

                  {/* Realistic photo preview for this chakra */}
                  <HandPositionIllustration
                    visualCue={
                      selectedChakra.number === 7 ? 'occipital' :
                      selectedChakra.number === 6 ? 'eyes' :
                      selectedChakra.number === 5 ? 'throat' :
                      selectedChakra.number === 4 ? 'heart' :
                      selectedChakra.number === 3 ? 'solar_plexus' :
                      selectedChakra.number === 2 ? 'abdomen' : 'root_groin'
                    }
                    chakraColor={selectedChakra.colorHex}
                    className="w-full h-44 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
