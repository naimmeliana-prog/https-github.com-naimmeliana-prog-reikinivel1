import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { WelcomeBanner } from './components/WelcomeBanner';
import { TreatmentManual } from './components/TreatmentManual';
import { ChakraInfographic } from './components/ChakraInfographic';
import { JournalSection } from './components/JournalSection';
import { PrinciplesAndHabits } from './components/PrinciplesAndHabits';
import { GuidedSessionModal } from './components/GuidedSessionModal';
import { TreatmentType, JournalEntry } from './types/reiki';
import { Sparkles, Heart, Shield, BookOpen, Volume2 } from 'lucide-react';
import { playTibetanBell } from './utils/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('manual');
  const [guidedModalOpen, setGuidedModalOpen] = useState<boolean>(false);
  const [guidedType, setGuidedType] = useState<TreatmentType>('self');
  const [guidedStepIndex, setGuidedStepIndex] = useState<number>(0);

  const handleStartGuidedSession = (type: TreatmentType, startPositionIndex = 0) => {
    setGuidedType(type);
    setGuidedStepIndex(startPositionIndex);
    setGuidedModalOpen(true);
  };

  const handleSaveToJournal = (entry: Partial<JournalEntry>) => {
    try {
      const STORAGE_KEY = 'reiki_level1_journal_entries';
      const existingStr = localStorage.getItem(STORAGE_KEY);
      const existing = existingStr ? JSON.parse(existingStr) : [];
      const newEntry: JournalEntry = {
        id: 'entry-' + Date.now(),
        date: new Date().toISOString(),
        treatmentType: entry.treatmentType || 'self',
        recipientName: entry.recipientName,
        durationMinutes: entry.durationMinutes || 30,
        chakrasFocused: entry.chakrasFocused || [4],
        sensations: entry.sensations || ['Calor en palmas'],
        emotionsLiberated: entry.emotionsLiberated || ['Paz profunda'],
        notes: entry.notes || 'Sesión guiada completada.',
        peaceLevelBefore: entry.peaceLevelBefore ?? 5,
        peaceLevelAfter: entry.peaceLevelAfter ?? 9,
        createdAt: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newEntry, ...existing]));
      // Switch tab to journal to see results
      setActiveTab('journal');
    } catch (e) {
      console.error('Failed to auto-save to journal', e);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-800 font-sans flex flex-col selection:bg-amber-200 selection:text-amber-950">
      {/* Sticky Zen Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenGuidedModal={() => handleStartGuidedSession('self', 0)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        
        {/* Welcome & Memory Reactivation Banner (Shown on top of Manual & Chakras) */}
        {(activeTab === 'manual' || activeTab === 'chakras') && (
          <WelcomeBanner
            onSelectAction={(tab) => setActiveTab(tab)}
            onStartSession={(type) => handleStartGuidedSession(type, 0)}
          />
        )}

        {/* Tab 1: Full Treatment Manual (Autotratamiento + A Terceros) */}
        {activeTab === 'manual' && (
          <TreatmentManual onStartGuidedSession={handleStartGuidedSession} />
        )}

        {/* Tab 2: Interactive Chakras & Color Visualization Infographic */}
        {activeTab === 'chakras' && (
          <ChakraInfographic />
        )}

        {/* Tab 3: Interactive Journal & Reflection Diary */}
        {activeTab === 'journal' && (
          <JournalSection />
        )}

        {/* Tab 4: Gokai Principles, 21-day tracker & Weekly Consistency Tips */}
        {activeTab === 'principles' && (
          <PrinciplesAndHabits />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-stone-900 text-stone-400 border-t border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-serif text-lg font-bold">
                霊
              </div>
              <div>
                <span className="font-serif font-bold text-white text-base">Reiki Shoden · Nivel 1</span>
                <p className="text-xs text-stone-400">Guía completa de imposición de manos, chakras y registro interior</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-stone-400">
              <button 
                onClick={() => {
                  playTibetanBell(1.0);
                  setActiveTab('manual');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-amber-300 transition-colors"
              >
                Manual
              </button>
              <button 
                onClick={() => {
                  playTibetanBell(1.0);
                  setActiveTab('chakras');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-amber-300 transition-colors"
              >
                Chakras
              </button>
              <button 
                onClick={() => {
                  playTibetanBell(1.0);
                  setActiveTab('journal');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-amber-300 transition-colors"
              >
                Diario
              </button>
              <button 
                onClick={() => {
                  playTibetanBell(1.0);
                  setActiveTab('principles');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-amber-300 transition-colors"
              >
                Principios
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400/90">
              <Shield className="w-3.5 h-3.5" />
              <span>Recordatorio Ético y Holístico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-500">
              Reiki es un método tradicional japonés de armonización bioenergética y crecimiento interior fundado por Mikao Usui sensei. Es una disciplina complementaria y de bienestar general. No sustituye diagnósticos, tratamientos farmacológicos ni indicaciones médicas o psicológicas profesionales.
            </p>
            <p className="text-[11px] text-stone-600 font-serif italic">
              «Que la Luz de Reiki guíe tus manos hacia la paz, la serenidad y la autocompasión.»
            </p>
          </div>
        </div>
      </footer>

      {/* Live Guided Session Modal */}
      <GuidedSessionModal
        isOpen={guidedModalOpen}
        onClose={() => setGuidedModalOpen(false)}
        initialType={guidedType}
        initialStepIndex={guidedStepIndex}
        onSaveToJournal={handleSaveToJournal}
      />
    </div>
  );
}
