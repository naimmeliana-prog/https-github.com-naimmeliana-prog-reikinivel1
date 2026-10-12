import React, { useState } from 'react';
import { REIKI_PRINCIPLES, CONSISTENCY_TIPS } from '../data/principlesData';
import { ReikiPrinciple } from '../types/reiki';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  HeartHandshake, 
  Compass, 
  SunMoon, 
  Volume2, 
  CheckCircle,
  HelpCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { playTibetanBell } from '../utils/sound';

export const PrinciplesAndHabits: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<ReikiPrinciple>(REIKI_PRINCIPLES[0]);
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('reiki_21_days_tracker');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [1, 2, 3]; // initial sample days
  });

  const toggleDay = (dayNum: number) => {
    playTibetanBell(1.0 + (dayNum % 7) * 0.05);
    setCompletedDays((prev) => {
      const next = prev.includes(dayNum)
        ? prev.filter((d) => d !== dayNum)
        : [...prev, dayNum];
      try {
        localStorage.setItem('reiki_21_days_tracker', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleSelectPrinciple = (p: ReikiPrinciple) => {
    setSelectedPrinciple(p);
    playTibetanBell(1.0 + p.id * 0.1);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900 border border-amber-200">
          <Award className="w-3.5 h-3.5 text-amber-600" />
          Filosofía Gokai & Hábito Semanal
        </span>
        <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
          Los 5 Principios y la Constancia Semanal
        </h2>
        <p className="text-sm md:text-base text-stone-600 leading-relaxed">
          Reiki no es solo una técnica de imposición de manos; es una forma de vivir en paz con uno mismo y con el entorno. La constancia suave y sin autoexigencia es el verdadero secreto.
        </p>
      </div>

      {/* SECTION 1: THE 5 PRINCIPLES (GOKAI) */}
      <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 md:p-8 border border-stone-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Gokai (五戒)</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
              Los Cinco Principios de Mikao Usui
            </h3>
          </div>
          <span className="text-xs text-stone-400">
            Toca cada principio para leer su contemplación y práctica diaria
          </span>
        </div>

        {/* Principles navigation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {REIKI_PRINCIPLES.map((principle) => {
            const isSelected = selectedPrinciple.id === principle.id;
            return (
              <button
                key={principle.id}
                onClick={() => handleSelectPrinciple(principle)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md'
                    : 'bg-stone-800/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold">0{principle.id}</span>
                  <span className="text-xs font-serif opacity-75">{principle.japanese.slice(0, 4)}</span>
                </div>
                <div className="text-xs font-semibold text-stone-200 line-clamp-2">
                  {principle.spanish}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Principle Deep View */}
        <div className="p-6 md:p-8 rounded-2xl bg-stone-950/70 border border-stone-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-stone-800 pb-4">
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-amber-300 block mb-1">
                {selectedPrinciple.japanese}
              </span>
              <span className="text-xs font-mono text-stone-400 tracking-wide">
                «{selectedPrinciple.romaji}»
              </span>
            </div>
            <div className="text-base md:text-lg font-serif font-semibold text-white">
              «{selectedPrinciple.spanish}»
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Contemplación Profunda:
              </span>
              <p className="text-stone-300 leading-relaxed text-xs md:text-sm">
                {selectedPrinciple.reflection}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Ejercicio Práctico para Hoy:
              </span>
              <p className="text-stone-300 leading-relaxed text-xs md:text-sm">
                {selectedPrinciple.dailyPractice}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: 21-DAYS PURIFICATION TRACKER */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700">Purificación Nivel 1</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              El Ciclo Sagrado de los 21 Días de Autotratamiento
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Marca cada día completado para reactivar la sintonización celular y el anclaje del hábito.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl">
            <span>Completados:</span>
            <strong className="text-amber-800 font-bold">{completedDays.length} de 21 días</strong>
          </div>
        </div>

        {/* 3 Phases Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <span className="font-bold text-amber-900 block mb-1">Semana 1 (Días 1 a 7): Nivel Físico</span>
            <p className="text-stone-600 leading-relaxed">
              El cuerpo elimina toxinas. Puede haber sed, cambios en la digestión o ganas de dormir más horas. Bebe abundante agua pura.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
            <span className="font-bold text-emerald-900 block mb-1">Semana 2 (Días 8 a 14): Nivel Emocional</span>
            <p className="text-stone-600 leading-relaxed">
              Afloran emociones reprimidas o recuerdos antiguos para ser despedidos con compasión y sin drama.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
            <span className="font-bold text-indigo-900 block mb-1">Semana 3 (Días 15 a 21): Nivel Espiritual</span>
            <p className="text-stone-600 leading-relaxed">
              Claridad mental serena, sincronicidades en tu día a día y sensación de conexión fluida con la Fuente.
            </p>
          </div>
        </div>

        {/* 21 Interactive Day Bubbles */}
        <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-21 gap-2 pt-2">
          {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => {
            const isDone = completedDays.includes(day);
            return (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`h-11 rounded-xl text-xs font-mono font-bold flex flex-col items-center justify-center transition-all ${
                  isDone
                    ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-400/40 scale-105'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200'
                }`}
                title={`Día ${day} de 21`}
              >
                <span>D{day}</span>
                {isDone && <span className="text-[9px]">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: WEEKLY HABIT & CONSISTENCY TIPS */}
      <div className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Estrategias para Mantener la Práctica Semanal
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Respuestas prácticas a los desafíos más comunes que surgen tras olvidar el curso inicial de Nivel 1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONSISTENCY_TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm space-y-4 hover:shadow transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-stone-900">
                    {tip.title}
                  </h4>
                  <span className="text-xs text-amber-700 font-medium">
                    {tip.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {tip.description}
              </p>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800">
                <strong className="text-stone-900 font-semibold block mb-0.5">Paso Práctico:</strong>
                {tip.actionableStep}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
