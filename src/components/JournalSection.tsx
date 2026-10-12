import React, { useState, useEffect } from 'react';
import { JournalEntry, TreatmentType } from '../types/reiki';
import { CHAKRAS_DATA } from '../data/chakrasData';
import { 
  Feather, 
  Calendar, 
  Clock, 
  Sparkles, 
  Trash2, 
  Plus, 
  Download, 
  TrendingUp, 
  Heart, 
  Flame, 
  Smile, 
  Search, 
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { playTibetanBell } from '../utils/sound';

const STORAGE_KEY = 'reiki_level1_journal_entries';

const DEFAULT_SAMPLE_ENTRIES: JournalEntry[] = [
  {
    id: 'sample-1',
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    treatmentType: 'self',
    durationMinutes: 35,
    sensations: ['Calor intenso en palmas', 'Pulsación rítmica', 'Pesadez relajante'],
    chakrasFocused: [4, 6, 7],
    emotionsLiberated: ['Paz profunda', 'Alivio de tensión', 'Claridad mental'],
    notes: 'Primer autotratamiento tras recordar las posiciones. Al llegar al chakra corazón (Anahata), sentí un calor muy reconfortante y solté un suspiro hondo. Me sentí profundamente reconciliado conmigo mismo.',
    peaceLevelBefore: 4,
    peaceLevelAfter: 9,
    createdAt: Date.now() - 86400000 * 2,
  },
  {
    id: 'sample-2',
    date: new Date(Date.now() - 86400000).toISOString(),
    treatmentType: 'others',
    recipientName: 'Hermana / Familiar',
    durationMinutes: 40,
    sensations: ['Hormigueo en dedos', 'Brisa fresca', 'Calor reconfortante'],
    chakrasFocused: [5, 6],
    emotionsLiberated: ['Desahogo sereno', 'Quietud'],
    notes: 'Sesión en camilla. Realicé el escaneo Byosen previo y sentí tirón en la garganta y nuca. Tras recitar mentalmente la oración para la garganta, la respiración del receptor se hizo muy profunda y se quedó dormida.',
    peaceLevelBefore: 6,
    peaceLevelAfter: 9,
    createdAt: Date.now() - 86400000,
  }
];

const COMMON_SENSATIONS = [
  'Calor intenso en palmas',
  'Hormigueo / Cosquilleo',
  'Pulsación rítmica',
  'Brisa fresca suave',
  'Frío inicial purificador',
  'Pesadez relajante en hombros',
  'Sensación de flotar',
  'Borborigmos digestivos'
];

const COMMON_EMOTIONS = [
  'Paz profunda',
  'Alivio de tensión',
  'Lágrimas de catarsis',
  'Claridad mental',
  'Desbloqueo creativo',
  'Amor incondicional',
  'Aceptación y perdón',
  'Sueño reparador'
];

export const JournalSection: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return DEFAULT_SAMPLE_ENTRIES;
  });

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Form State
  const [formType, setFormType] = useState<TreatmentType>('self');
  const [formRecipient, setFormRecipient] = useState<string>('');
  const [formDuration, setFormDuration] = useState<number>(30);
  const [formChakras, setFormChakras] = useState<number[]>([4]);
  const [formSensations, setFormSensations] = useState<string[]>(['Calor intenso en palmas']);
  const [formEmotions, setFormEmotions] = useState<string[]>(['Paz profunda']);
  const [formNotes, setFormNotes] = useState<string>('');
  const [formPeaceBefore, setFormPeaceBefore] = useState<number>(5);
  const [formPeaceAfter, setFormPeaceAfter] = useState<number>(9);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Error saving journal to localStorage', e);
    }
  }, [entries]);

  const handleToggleChakra = (chakraNum: number) => {
    setFormChakras((prev) => 
      prev.includes(chakraNum) 
        ? prev.filter((c) => c !== chakraNum) 
        : [...prev, chakraNum]
    );
  };

  const handleToggleSensation = (sen: string) => {
    setFormSensations((prev) => 
      prev.includes(sen) 
        ? prev.filter((s) => s !== sen) 
        : [...prev, sen]
    );
  };

  const handleToggleEmotion = (emo: string) => {
    setFormEmotions((prev) => 
      prev.includes(emo) 
        ? prev.filter((e) => e !== emo) 
        : [...prev, emo]
    );
  };

  const handleSaveEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: JournalEntry = {
      id: 'entry-' + Date.now(),
      date: new Date().toISOString(),
      treatmentType: formType,
      recipientName: formType === 'others' ? (formRecipient || 'Receptor') : undefined,
      durationMinutes: formDuration,
      chakrasFocused: formChakras,
      sensations: formSensations,
      emotionsLiberated: formEmotions,
      notes: formNotes || 'Sesión de práctica de Reiki Nivel 1 realizada con serenidad e intención.',
      peaceLevelBefore: formPeaceBefore,
      peaceLevelAfter: formPeaceAfter,
      createdAt: Date.now(),
    };

    setEntries([newEntry, ...entries]);
    playTibetanBell(1.1);
    setIsFormOpen(false);
    // Reset form
    setFormNotes('');
    setFormRecipient('');
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const exportJournalData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `diario_reiki_nivel1_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Stats
  const totalSessions = entries.length;
  const totalMinutes = entries.reduce((acc, curr) => acc + (curr.durationMinutes || 0), 0);
  const selfSessions = entries.filter((e) => e.treatmentType === 'self').length;
  const othersSessions = entries.filter((e) => e.treatmentType === 'others').length;

  const filteredEntries = entries.filter((entry) => {
    const matchesType = filterType === 'all' || entry.treatmentType === filterType;
    const matchesSearch = 
      entry.notes.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (entry.recipientName && entry.recipientName.toLowerCase().includes(searchFilter.toLowerCase())) ||
      entry.sensations.some(s => s.toLowerCase().includes(searchFilter.toLowerCase())) ||
      entry.emotionsLiberated.some(em => em.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900 border border-amber-200 mb-2">
            <Feather className="w-3.5 h-3.5 text-amber-600" />
            Bitácora & Reflexiones Diarias
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Diario de Práctica Personal
          </h2>
          <p className="text-sm md:text-base text-stone-600 mt-1 max-w-xl">
            Registra tus sensaciones táctiles (Byosen), emociones liberadas y la transformación de tu serenidad sesión a sesión.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportJournalData}
            className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Exportar respaldo de tu diario"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar Copia</span>
          </button>

          <button
            onClick={() => {
              playTibetanBell(1.0);
              setIsFormOpen(!isFormOpen);
            }}
            className="px-4 py-2.5 rounded-xl bg-stone-900 text-amber-100 hover:bg-stone-800 text-xs md:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
          >
            {isFormOpen ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Cerrar Formulario
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-amber-400" />
                Nueva Reflexión de Sesión
              </>
            )}
          </button>
        </div>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">Sesiones Totales</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-stone-900">{totalSessions}</span>
            <span className="text-xs text-stone-500">registros</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">Tiempo Canalizado</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-amber-700">{totalMinutes}</span>
            <span className="text-xs text-stone-500">minutos</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">Autotratamientos</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-emerald-700">{selfSessions}</span>
            <span className="text-xs text-stone-500">en ti mismo</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">A Otras Personas</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-indigo-700">{othersSessions}</span>
            <span className="text-xs text-stone-500">a terceros</span>
          </div>
        </div>
      </div>

      {/* New Entry Form */}
      {isFormOpen && (
        <form onSubmit={handleSaveEntry} className="bg-white rounded-3xl p-6 md:p-8 border border-amber-200/80 shadow-md space-y-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h3 className="font-serif font-bold text-lg md:text-xl text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Anotar Experiencia de Imposición de Manos
            </h3>
            <span className="text-xs text-stone-400">Guarda en memoria local privada</span>
          </div>

          {/* Type & Duration row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Tipo de Imposición
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormType('self')}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                    formType === 'self'
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  Autotratamiento
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('others')}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                    formType === 'others'
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-semibold'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  A Otra Persona
                </button>
              </div>
            </div>

            {formType === 'others' && (
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Nombre del Receptor
                </label>
                <input
                  type="text"
                  value={formRecipient}
                  onChange={(e) => setFormRecipient(e.target.value)}
                  placeholder="Ej: Amigo, Pareja, Madre..."
                  className="w-full px-3 py-2 rounded-xl text-xs bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-800"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Duración de la Sesión
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="5"
                  max="120"
                  value={formDuration}
                  onChange={(e) => setFormDuration(Number(e.target.value))}
                  className="w-24 px-3 py-2 rounded-xl text-xs bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-800"
                />
                <span className="text-xs text-stone-500">minutos</span>
              </div>
            </div>
          </div>

          {/* Chakras Worked */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Chakras o zonas con mayor demanda energética
            </label>
            <div className="flex flex-wrap gap-2">
              {CHAKRAS_DATA.map((chk) => {
                const isSelected = formChakras.includes(chk.number);
                return (
                  <button
                    key={chk.number}
                    type="button"
                    onClick={() => handleToggleChakra(chk.number)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'text-white border-transparent shadow-sm'
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                    style={isSelected ? { backgroundColor: chk.colorHex } : {}}
                  >
                    <span className="font-bold">#{chk.number}</span>
                    <span>{chk.spanishName.replace('Chakra ', '')}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sensations Byosen Chips */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Sensaciones táctiles (Byosen) percibidas
            </label>
            <div className="flex flex-wrap gap-2">
              {COMMON_SENSATIONS.map((sen) => {
                const isSelected = formSensations.includes(sen);
                return (
                  <button
                    key={sen}
                    type="button"
                    onClick={() => handleToggleSensation(sen)}
                    className={`px-3 py-1 rounded-xl text-xs transition-all border ${
                      isSelected
                        ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {sen}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Emotions Liberated Chips */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Emociones y estados experimentados
            </label>
            <div className="flex flex-wrap gap-2">
              {COMMON_EMOTIONS.map((emo) => {
                const isSelected = formEmotions.includes(emo);
                return (
                  <button
                    key={emo}
                    type="button"
                    onClick={() => handleToggleEmotion(emo)}
                    className={`px-3 py-1 rounded-xl text-xs transition-all border ${
                      isSelected
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-semibold'
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {emo}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Peace Level Before vs After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-stone-700">Paz interior ANTES (1-10)</span>
                <span className="font-mono text-sm font-bold text-stone-800">{formPeaceBefore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formPeaceBefore}
                onChange={(e) => setFormPeaceBefore(Number(e.target.value))}
                className="w-full accent-stone-700"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-stone-700">Paz interior DESPUÉS (1-10)</span>
                <span className="font-mono text-sm font-bold text-emerald-700">{formPeaceAfter}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formPeaceAfter}
                onChange={(e) => setFormPeaceAfter(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Reflexiones, mensajes intuitivos o aprendizajes de hoy
            </label>
            <textarea
              rows={3}
              value={formNotes}
              onChange={(e) => setFormNotes(e.target.value)}
              placeholder="¿Qué pensamientos se aquietaron? ¿Hubo alguna zona que requirió más tiempo? ¿Qué cambios percibiste en la respiración?"
              className="w-full px-4 py-3 rounded-xl text-xs md:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-800 leading-relaxed"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs md:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Feather className="w-4 h-4" />
              Guardar en el Diario
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Bar for entries */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-full transition-all ${
              filterType === 'all'
                ? 'bg-stone-900 text-white font-medium'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todas ({entries.length})
          </button>
          <button
            onClick={() => setFilterType('self')}
            className={`px-3 py-1.5 rounded-full transition-all ${
              filterType === 'self'
                ? 'bg-amber-700 text-white font-medium'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Autotratamiento ({selfSessions})
          </button>
          <button
            onClick={() => setFilterType('others')}
            className={`px-3 py-1.5 rounded-full transition-all ${
              filterType === 'others'
                ? 'bg-emerald-700 text-white font-medium'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            A Otros ({othersSessions})
          </button>
        </div>

        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Buscar en tus notas..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-800"
          />
        </div>
      </div>

      {/* Entries List */}
      {filteredEntries.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 text-stone-500">
          No hay entradas que coincidan. Haz clic en "Nueva Reflexión de Sesión" para escribir tu primera anotación.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map((item) => {
            const formattedDate = new Date(item.date).toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            const peaceDelta = item.peaceLevelAfter - item.peaceLevelBefore;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow transition-all space-y-4"
              >
                {/* Entry Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      item.treatmentType === 'self'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-emerald-100 text-emerald-900'
                    }`}>
                      {item.treatmentType === 'self' ? '👤 Autotratamiento' : `👥 Para ${item.recipientName || 'Tercero'}`}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {item.durationMinutes} minutos
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-stone-500 capitalize flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {formattedDate}
                    </span>
                    <button
                      onClick={() => handleDeleteEntry(item.id)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Eliminar anotación"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Chakras & Sensations pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {item.chakrasFocused.map((cNum) => {
                    const cInfo = CHAKRAS_DATA.find((c) => c.number === cNum);
                    return (
                      <span
                        key={cNum}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium text-white shadow-xs"
                        style={{ backgroundColor: cInfo?.colorHex || '#ca8a04' }}
                      >
                        Chakra {cNum} ({cInfo?.sanskritName})
                      </span>
                    );
                  })}

                  {item.sensations.map((sen, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] bg-stone-100 text-stone-700 border border-stone-200"
                    >
                      {sen}
                    </span>
                  ))}
                </div>

                {/* Notes Text */}
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-serif italic pl-3 border-l-2 border-amber-300">
                  «{item.notes}»
                </p>

                {/* Peace delta & Emotions footer */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-stone-100">
                  <div className="flex items-center gap-1.5 text-stone-600">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-medium">Emociones:</span>
                    <span>{item.emotionsLiberated.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-stone-400">Paz: {item.peaceLevelBefore}/10 → </span>
                    <span className="font-bold text-emerald-700">{item.peaceLevelAfter}/10</span>
                    {peaceDelta > 0 && (
                      <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold">
                        +{peaceDelta}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
