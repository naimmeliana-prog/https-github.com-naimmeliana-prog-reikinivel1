import React, { useState, useEffect, useRef } from 'react';
import { TreatmentType, HandPosition, JournalEntry } from '../types/reiki';
import { SELF_TREATMENT_POSITIONS } from '../data/selfTreatmentData';
import { OTHER_TREATMENT_POSITIONS } from '../data/otherTreatmentData';
import { HandPositionIllustration } from './HandPositionIllustration';
import { playTibetanBell, ambientSound } from '../utils/sound';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  Feather,
  Music
} from 'lucide-react';

interface GuidedSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: TreatmentType;
  initialStepIndex?: number;
  onSaveToJournal: (entry: Partial<JournalEntry>) => void;
}

export const GuidedSessionModal: React.FC<GuidedSessionModalProps> = ({
  isOpen,
  onClose,
  initialType,
  initialStepIndex = 0,
  onSaveToJournal,
}) => {
  const [treatmentType, setTreatmentType] = useState<TreatmentType>(initialType);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(initialStepIndex);
  const [minutesPerPosition, setMinutesPerPosition] = useState<number>(3);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(minutesPerPosition * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [ambientActive, setAmbientActive] = useState<boolean>(false);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);
  const [totalElapsedTime, setTotalElapsedTime] = useState<number>(0);

  const positions: HandPosition[] = treatmentType === 'self' 
    ? SELF_TREATMENT_POSITIONS 
    : OTHER_TREATMENT_POSITIONS;

  const currentPos = positions[currentStepIndex] || positions[0];

  // Sync initial props
  useEffect(() => {
    if (isOpen) {
      setTreatmentType(initialType);
      setCurrentStepIndex(initialStepIndex);
      setSecondsRemaining(minutesPerPosition * 60);
      setIsRunning(false);
      setSessionCompleted(false);
      setTotalElapsedTime(0);
    } else {
      ambientSound.stop();
      setAmbientActive(false);
    }
  }, [isOpen, initialType, initialStepIndex]);

  // Timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && !sessionCompleted) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Step completed! Ring bell and advance
            playTibetanBell(1.1);
            if (currentStepIndex < positions.length - 1) {
              setCurrentStepIndex((curr) => curr + 1);
              return minutesPerPosition * 60;
            } else {
              // Full session ended
              setIsRunning(false);
              setSessionCompleted(true);
              playTibetanBell(0.9);
              setTimeout(() => playTibetanBell(1.2), 600);
              return 0;
            }
          }
          return prev - 1;
        });

        setTotalElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, currentStepIndex, positions.length, minutesPerPosition, sessionCompleted]);

  // Reset timer on step manual change
  const goToStep = (index: number) => {
    if (index >= 0 && index < positions.length) {
      playTibetanBell(1.0);
      setCurrentStepIndex(index);
      setSecondsRemaining(minutesPerPosition * 60);
    }
  };

  const handleStartPause = () => {
    if (!isRunning) {
      playTibetanBell(1.0);
    }
    setIsRunning(!isRunning);
  };

  const toggleAmbientMusic = () => {
    const active = ambientSound.toggle();
    setAmbientActive(active);
  };

  const handleClose = () => {
    ambientSound.stop();
    setAmbientActive(false);
    setIsRunning(false);
    onClose();
  };

  const handleLogCompletedSession = () => {
    const minutesSpent = Math.max(1, Math.round(totalElapsedTime / 60));
    onSaveToJournal({
      treatmentType,
      durationMinutes: minutesSpent,
      chakrasFocused: currentPos.chakraId ? [currentPos.chakraId] : [4],
      sensations: ['Calor profundo', 'Paz interior'],
      emotionsLiberated: ['Serenidad', 'Relajación profunda'],
      notes: `Sesión guiada completada (${treatmentType === 'self' ? 'Autotratamiento' : 'A otra persona'}). ${currentPos.title}.`,
      peaceLevelBefore: 5,
      peaceLevelAfter: 9,
    });
    handleClose();
  };

  if (!isOpen) return null;

  const progressPercent = ((currentStepIndex + 1) / positions.length) * 100;
  const currentMinutes = Math.floor(secondsRemaining / 60);
  const currentSeconds = secondsRemaining % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-stone-900 text-stone-100 rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto border border-stone-800 shadow-2xl flex flex-col justify-between">
        
        {/* Header bar */}
        <div className="p-4 md:p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-mono">
                {treatmentType === 'self' ? 'Autotratamiento Guiado' : 'Tratamiento a Otros'}
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white">
                Paso {currentStepIndex + 1} de {positions.length}: {currentPos.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Ambient sound toggle */}
            <button
              onClick={toggleAmbientMusic}
              className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs ${
                ambientActive
                  ? 'bg-amber-500 text-stone-950 font-semibold'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
              title="Música armónica 432Hz"
            >
              <Music className="w-4 h-4" />
              <span className="hidden sm:inline">{ambientActive ? 'Armónico ON' : 'Armónico'}</span>
            </button>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Completion Screen */}
        {sessionCompleted ? (
          <div className="p-8 md:p-12 text-center space-y-6 my-auto">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">
                ¡Sesión Completada con Éxito!
              </h4>
              <p className="text-stone-300 text-sm leading-relaxed">
                Junta tus manos en Gassho frente al pecho. Agradece a la energía de Reiki por fluir a través de ti. Permanece un momento en silencio sintiendo el manto de luz que te rodea.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-800/80 max-w-xs mx-auto border border-stone-700 text-xs text-stone-400">
              Tiempo total de práctica: <strong className="text-amber-300 font-mono text-sm">{Math.round(totalElapsedTime / 60)} minutos</strong>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleLogCompletedSession}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4" />
                Anotar en mi Diario de Reiki
              </button>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-stone-800 text-stone-300 hover:text-white transition-all text-sm"
              >
                Cerrar y Descansar
              </button>
            </div>
          </div>
        ) : (
          /* Active Step View */
          <div className="p-6 md:p-8 space-y-6">
            {/* Progress bar */}
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Illustration & Main Focus Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Illustration (5 cols) */}
              <div className="md:col-span-5 bg-stone-950/80 rounded-2xl p-3 border border-stone-800">
                <HandPositionIllustration
                  visualCue={currentPos.visualCue}
                  chakraColor={currentPos.chakraColor}
                  className="w-full h-56 md:h-64"
                />
                <div className="mt-2 text-center text-xs text-stone-400 font-medium">
                  {currentPos.handsDescription}
                </div>
              </div>

              {/* Position Sacred Prayer & Timer (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                {/* Timer Display */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-800/60 border border-stone-700/60">
                  <div>
                    <span className="text-[11px] text-stone-400 font-mono uppercase block">Tiempo en esta posición</span>
                    <span className="text-3xl md:text-4xl font-mono font-bold text-amber-300">
                      {String(currentMinutes).padStart(2, '0')}:{String(currentSeconds).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Config minutes selector */}
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-stone-400 mr-1">Duración:</span>
                    {[2, 3, 5].map((m) => (
                      <button
                        key={m}
                        disabled={isRunning}
                        onClick={() => {
                          setMinutesPerPosition(m);
                          setSecondsRemaining(m * 60);
                        }}
                        className={`px-2.5 py-1 rounded-lg font-mono transition-all ${
                          minutesPerPosition === m
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-800 text-stone-400 hover:text-white'
                        }`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suggested Prayer */}
                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Oración / Decreto para recitar:
                  </span>
                  <p className="font-serif italic text-stone-200 text-sm md:text-base leading-relaxed">
                    {currentPos.suggestedPrayer}
                  </p>
                </div>

                {/* Intention to focus on */}
                <div className="p-3.5 rounded-xl bg-stone-800/40 border border-stone-800 text-xs text-stone-300">
                  <strong className="text-amber-200 font-semibold block mb-0.5">Intención:</strong>
                  {currentPos.intention}
                </div>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToStep(currentStepIndex - 1)}
                  disabled={currentStepIndex === 0}
                  className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-40 text-xs font-medium text-stone-300 flex items-center gap-1.5"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                  Anterior
                </button>

                <button
                  onClick={() => goToStep(currentStepIndex + 1)}
                  disabled={currentStepIndex === positions.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-40 text-xs font-medium text-stone-300 flex items-center gap-1.5"
                >
                  Siguiente
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Play / Pause Primary Button */}
              <button
                onClick={handleStartPause}
                className={`px-6 py-2.5 rounded-2xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 shadow-lg ${
                  isRunning
                    ? 'bg-amber-600 text-white hover:bg-amber-500'
                    : 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 hover:brightness-110'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pausar Temporizador
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    Iniciar Imposición ({minutesPerPosition} min)
                  </>
                )}
              </button>

              {/* Sound chime test */}
              <button
                onClick={() => playTibetanBell(1.0)}
                className="px-3 py-2 rounded-xl bg-stone-800/70 hover:bg-stone-700 text-stone-400 hover:text-amber-300 text-xs flex items-center gap-1.5 transition-colors"
                title="Tocar campana tibetana de prueba"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Tocar Campana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
