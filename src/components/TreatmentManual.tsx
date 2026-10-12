import React, { useState } from 'react';
import { TreatmentType, HandPosition } from '../types/reiki';
import { SELF_TREATMENT_POSITIONS } from '../data/selfTreatmentData';
import { OTHER_TREATMENT_POSITIONS } from '../data/otherTreatmentData';
import { HandPositionIllustration } from './HandPositionIllustration';
import { 
  User, 
  Users, 
  Search, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Compass, 
  Clock, 
  Volume2, 
  BookOpen, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { playTibetanBell } from '../utils/sound';

interface TreatmentManualProps {
  onStartGuidedSession: (type: TreatmentType, startPositionIndex?: number) => void;
}

export const TreatmentManual: React.FC<TreatmentManualProps> = ({ onStartGuidedSession }) => {
  const [activeTab, setActiveTab] = useState<TreatmentType>('self');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPositionId, setExpandedPositionId] = useState<string | null>(null);

  const currentList: HandPosition[] = activeTab === 'self' 
    ? SELF_TREATMENT_POSITIONS 
    : OTHER_TREATMENT_POSITIONS;

  // Filter list
  const filteredList = currentList.filter((pos) => {
    const matchesCategory = selectedCategory === 'todos' || pos.category === selectedCategory;
    const matchesSearch = 
      pos.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.bodyArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.intention.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.suggestedPrayer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'todos', label: 'Todas las posiciones' },
    { id: 'inicio_cierre', label: 'Apertura y Cierre' },
    { id: 'cabeza', label: 'Cabeza y Rostro' },
    { id: 'frontal', label: 'Torso Frontal' },
    { id: 'espalda', label: 'Espalda y Riñones' },
    { id: 'extremidades', label: 'Pies y Rodillas' },
  ];

  return (
    <div className="space-y-8">
      {/* Header and Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900 border border-amber-200 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            Manual Oficial Reiki Shoden Nivel 1
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Guía de Imposición de Manos
          </h2>
          <p className="text-sm md:text-base text-stone-600 mt-1 max-w-xl">
            Ilustraciones anatómicas en español, oraciones sagradas para cada punto, intención y beneficios específicos para tu práctica.
          </p>
        </div>

        {/* Tab switch buttons */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-200/70 rounded-2xl shrink-0 self-start md:self-auto">
          <button
            onClick={() => {
              setActiveTab('self');
              playTibetanBell(1.0);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all ${
              activeTab === 'self'
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <User className="w-4 h-4 text-amber-600" />
            Autotratamiento (13 pasos)
          </button>

          <button
            onClick={() => {
              setActiveTab('others');
              playTibetanBell(1.15);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all ${
              activeTab === 'others'
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-600" />
            A Otras Personas (14 pasos)
          </button>
        </div>
      </div>

      {/* Protocol Banner for selected mode */}
      <div className={`p-5 rounded-2xl border ${
        activeTab === 'self' 
          ? 'bg-amber-50/70 border-amber-200 text-amber-900' 
          : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-base flex items-center gap-2">
              <Compass className="w-4 h-4" />
              {activeTab === 'self'
                ? 'Protocolo de Autotratamiento Diario'
                : 'Protocolo para Tratar a Otra Persona (Camilla o Sentada)'}
            </h3>
            <p className="text-xs leading-relaxed opacity-90 max-w-2xl">
              {activeTab === 'self'
                ? 'Mantén cada posición de 3 a 5 minutos, o hasta que notes que el calor en tus palmas se apacigua. Respira con calma y mantén la mente anclada en la oración sugerida.'
                : 'Antes de tocar al receptor, realiza Kenyoku (baño seco) y pide permiso. Respeta las zonas íntimas levantando las manos a 3-5 cm. Concluye siempre con alisado del aura y corte de lazo.'}
            </p>
          </div>

          <button
            onClick={() => onStartGuidedSession(activeTab, 0)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 text-amber-100 hover:bg-stone-800 transition-all shadow-md shrink-0"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Iniciar Sesión Guiada con Temporizador
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white font-medium shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por órgano, beneficio o intención..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-800"
            />
          </div>
        </div>

        {/* Realistic Photos Info Note */}
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">📷</span>
            <span>
              <strong>Fotografías reales activadas:</strong> Cada tarjeta muestra ahora la postura corporal real para que identifiques la posición exacta. Haz clic en <strong>Foto Real / Esquema</strong> o sobre la imagen para ampliar los detalles anatómicos.
            </span>
          </div>
        </div>

      {/* Cards Grid */}
      {filteredList.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 text-stone-500">
          No se encontraron posiciones con ese término. Prueba con otra búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredList.map((pos, idx) => {
            const isExpanded = expandedPositionId === pos.id;
            return (
              <div
                key={pos.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Illustration Top Section */}
                <div className="p-4 bg-stone-900/95 relative border-b border-stone-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-amber-300 font-semibold border border-stone-700">
                      Paso #{idx + 1}
                    </span>
                    {pos.chakraName && (
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-white shadow-sm flex items-center gap-1.5"
                        style={{ backgroundColor: pos.chakraColor || '#ca8a04' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {pos.chakraName}
                      </span>
                    )}
                  </div>

                  {/* SVG Illustration */}
                  <HandPositionIllustration
                    visualCue={pos.visualCue}
                    chakraColor={pos.chakraColor}
                    className="w-full h-56"
                  />

                  {/* Body area badge */}
                  <div className="mt-2 text-center">
                    <span className="text-xs font-medium text-stone-300">
                      📍 {pos.bodyArea}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      {pos.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {pos.handsDescription}
                    </p>
                  </div>

                  {/* Suggested Prayer Box (Emphasized requirement) */}
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-stone-800 relative">
                    <div className="flex items-center gap-1.5 mb-1 text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Oración / Decreto Sugerido para este punto:
                    </div>
                    <p className="font-serif italic text-sm text-stone-800 leading-relaxed">
                      {pos.suggestedPrayer}
                    </p>
                  </div>

                  {/* Intention to focus on (Emphasized requirement) */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      🎯 Intención en la que enfocarte:
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {pos.intention}
                    </p>
                  </div>

                  {/* Benefits to motivate (Emphasized requirement) */}
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                      🌿 Beneficios de tratar esta zona:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-stone-600">
                      {pos.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sensations Tip */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500" />
                      Sensación habitual: {pos.sensationsTip}
                    </span>
                    <span className="font-mono text-stone-400">~{pos.durationMinutesRecommendation} min</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      playTibetanBell(1.0);
                      onStartGuidedSession(activeTab, idx);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 hover:text-amber-700 transition-colors"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Comenzar sesión desde este punto
                  </button>
                  <span className="text-xs text-stone-400 font-mono">
                    Recomendado: {pos.durationMinutesRecommendation} min
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
