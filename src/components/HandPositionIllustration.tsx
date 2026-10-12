import React, { useState } from 'react';
import { Camera, Layers, Maximize2, X, Compass, CheckCircle2 } from 'lucide-react';

import gasshoImg from '../assets/images/reiki_gassho_hands_1791799891070.jpg';
import eyesImg from '../assets/images/reiki_eyes_hands_1791799872836.jpg';
import templesImg from '../assets/images/reiki_temples_hands_1791799908863.jpg';
import occipitalImg from '../assets/images/reiki_occipital_hands_1791799928195.jpg';
import throatImg from '../assets/images/reiki_throat_hands_1791799949328.jpg';
import heartImg from '../assets/images/reiki_heart_hands_1791799973952.jpg';
import solarImg from '../assets/images/reiki_solar_hands_1791799998664.jpg';
import abdomenImg from '../assets/images/reiki_abdomen_hands_1791800024963.jpg';
import shouldersImg from '../assets/images/reiki_shoulders_hands_1791800148422.jpg';
import backImg from '../assets/images/reiki_back_kidneys_1791800053821.jpg';
import feetImg from '../assets/images/reiki_feet_hands_1791800083153.jpg';
import auraImg from '../assets/images/reiki_aura_hands_1791800116219.jpg';

export type VisualCueType = 
  | 'eyes' 
  | 'temples' 
  | 'occipital' 
  | 'throat' 
  | 'heart' 
  | 'solar_plexus' 
  | 'abdomen' 
  | 'root_groin' 
  | 'knees' 
  | 'feet' 
  | 'shoulders' 
  | 'upper_back' 
  | 'lower_back' 
  | 'sacrum' 
  | 'gassho' 
  | 'aura_smoothing';

interface HandPositionIllustrationProps {
  visualCue: VisualCueType;
  chakraColor?: string;
  className?: string;
  interactive?: boolean;
}

const REALISTIC_IMAGE_MAP: Record<VisualCueType, { img: string; title: string; anatomicalGuide: string }> = {
  gassho: {
    img: gasshoImg,
    title: 'Gassho (合掌) - Postura Meditativa',
    anatomicalGuide: 'Palmas unidas verticalmente a la altura del corazón; los pulgares descansan suavemente cerca del esternón.',
  },
  eyes: {
    img: eyesImg,
    title: 'Ojos, Frente y Tercer Ojo',
    anatomicalGuide: 'Talones de las palmas sobre los pómulos; dedos en copa cubriendo ojos y frente sin presionar los párpados.',
  },
  temples: {
    img: templesImg,
    title: 'Sienes y Oídos (Lóbulos Temporales)',
    anatomicalGuide: 'Una palma abierta descansando sobre cada sien y oreja, dedos extendidos horizontalmente hacia la nuca.',
  },
  occipital: {
    img: occipitalImg,
    title: 'Nuca y Occipital (Base Craneal)',
    anatomicalGuide: 'Manos acunando la parte posterior de la cabeza en la protuberancia occipital externa y primeras cervicales.',
  },
  throat: {
    img: throatImg,
    title: 'Garganta y Cuello (Chakra Vishuddha)',
    anatomicalGuide: 'Bordes de las palmas a ambos lados del cuello o levitando a 3 cm. Nunca ejercer presión sobre la tráquea.',
  },
  heart: {
    img: heartImg,
    title: 'Corazón y Timo (Chakra Anahata)',
    anatomicalGuide: 'Manos planas sobre el esternón medio y la parte alta del pecho (glándula timo), dedos juntos y relajados.',
  },
  solar_plexus: {
    img: solarImg,
    title: 'Plexo Solar y Estómago (Chakra Manipura)',
    anatomicalGuide: 'Manos contiguas cubriendo la boca del estómago, justo por debajo del arco costal y sobre el diafragma.',
  },
  abdomen: {
    img: abdomenImg,
    title: 'Bajo Vientre y Centro Hara (Svadhisthana)',
    anatomicalGuide: 'Ambas palmas en paralelo horizontal descansando 3 a 5 cm por debajo del ombligo.',
  },
  root_groin: {
    img: abdomenImg,
    title: 'Ingles, Pubis y Chakra Raíz (Muladhara)',
    anatomicalGuide: 'Manos formando una "V" invertida hacia el hueso púbico y los pliegues de las ingles (en terceros, levitar con respeto a 5 cm).',
  },
  shoulders: {
    img: shouldersImg,
    title: 'Hombros y Trapecios (Espalda Alta)',
    anatomicalGuide: 'Palmas abiertas apoyadas en el músculo trapecio superior de cada hombro, descargando el peso muscular.',
  },
  upper_back: {
    img: shouldersImg,
    title: 'Espalda Alta y Omóplatos',
    anatomicalGuide: 'Palmas sobre la zona interescapular (altura dorsal 4-6, parte posterior del corazón).',
  },
  lower_back: {
    img: backImg,
    title: 'Riñones y Lumbares (Punto Ming Men)',
    anatomicalGuide: 'Palmas sobre la región lumbar a ambos lados de la columna, a la altura de las costillas flotantes y riñones.',
  },
  sacrum: {
    img: backImg,
    title: 'Sacro y Cóccix',
    anatomicalGuide: 'Palma sobre el hueso sacro triangular en la base de la columna lumbar.',
  },
  knees: {
    img: feetImg,
    title: 'Rodillas (Articulaciones)',
    anatomicalGuide: 'Una mano en copa sobre cada rótula, abarcando meniscos y laterales articulares.',
  },
  feet: {
    img: feetImg,
    title: 'Plantas de los Pies (Enraizamiento K-1)',
    anatomicalGuide: 'Palmas abrazando las plantas de los pies sobre el punto Yongquan (K-1 Burbuja Manante) y talones.',
  },
  aura_smoothing: {
    img: auraImg,
    title: 'Alisado del Aura y Barrido Áurico',
    anatomicalGuide: 'Palmas abiertas suspendidas en el aire a 15-20 cm del cuerpo, barriendo lentamente de cabeza a pies sin tocar.',
  },
};

export const HandPositionIllustration: React.FC<HandPositionIllustrationProps> = ({
  visualCue,
  chakraColor = '#059669',
  className = 'w-full h-64 md:h-72',
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'diagram'>('photo');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);

  const realisticInfo = REALISTIC_IMAGE_MAP[visualCue] || REALISTIC_IMAGE_MAP.gassho;

  return (
    <>
      <div className={`relative flex items-center justify-center bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-md group select-none ${className}`}>
        
        {/* Toggle Mode Button: Photo vs Diagram */}
        <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-stone-900/90 backdrop-blur-md p-1 rounded-xl border border-stone-700/80 shadow-md">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('photo');
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'photo'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Ver fotografía de la posición exacta"
          >
            <Camera className="w-3 h-3" />
            <span>Foto Real</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('diagram');
            }}
            className={`px-2 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-all ${
              viewMode === 'diagram'
                ? 'bg-amber-500 text-stone-950 shadow-xs font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
            title="Ver esquema anatómico vectorial"
          >
            <Layers className="w-3 h-3" />
            <span>Esquema</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomModalOpen(true);
            }}
            className="p-1 rounded-lg text-stone-400 hover:text-amber-300 transition-colors ml-0.5"
            title="Ver foto ampliada"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* VIEW 1: REALISTIC HIGH FIDELITY PHOTOGRAPHY */}
        {viewMode === 'photo' ? (
          <div 
            onClick={() => setIsZoomModalOpen(true)}
            className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
          >
            <img
              src={realisticInfo.img}
              alt={realisticInfo.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />

            {/* Glowing Chakra Accent Ring */}
            <div
              className="absolute top-3 left-3 w-3 h-3 rounded-full shadow-lg ring-2 ring-white/80 animate-pulse pointer-events-none"
              style={{ backgroundColor: chakraColor }}
              title="Chakra asociado"
            />

            {/* Anatomical Landmark Placement Bottom Label */}
            <div className="absolute bottom-2.5 left-3 right-3 z-10 pointer-events-none">
              <div className="bg-stone-900/90 backdrop-blur-md rounded-xl p-2 border border-stone-700/80 shadow-md">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                  <Compass className="w-3 h-3 shrink-0" />
                  <span className="truncate">{realisticInfo.title}</span>
                </div>
                <p className="text-[10px] text-stone-200 mt-0.5 line-clamp-2 leading-relaxed">
                  {realisticInfo.anatomicalGuide}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW 2: VECTOR ANATOMICAL DIAGRAM (Fallback/Complementary SVG) */
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <div 
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: chakraColor }}
            />
            <svg
              viewBox="0 0 400 320"
              className="w-full h-full max-h-72 drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d6d3d1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#78716c" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="handGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Gassho */}
              {visualCue === 'gassho' && (
                <g>
                  <circle cx="200" cy="70" r="32" fill="#78716c" fillOpacity="0.3" stroke="#d6d3d1" strokeWidth="2" />
                  <circle cx="200" cy="180" r="48" fill={chakraColor} fillOpacity="0.2" filter="url(#glow)" />
                  <g transform="translate(200, 175)">
                    <path d="M -10 20 L -6 -25 C -5 -32 -1 -32 0 -22 C 1 -32 5 -32 6 -25 L 10 20 Z" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" filter="url(#glow)" />
                    <circle cx="0" cy="-5" r="8" fill="#ffffff" fillOpacity="0.8" />
                  </g>
                  <text x="200" y="270" textAnchor="middle" fill="#fef3c7" fontSize="13" fontWeight="500">
                    Gassho · Manos juntas al centro del pecho
                  </text>
                </g>
              )}

              {/* Eyes */}
              {visualCue === 'eyes' && (
                <g>
                  <path d="M 150 140 C 150 70 170 30 200 30 C 230 30 250 70 250 140 C 250 190 230 220 200 220 C 170 220 150 190 150 140 Z" fill="#292524" stroke="#a8a29e" strokeWidth="2" />
                  <circle cx="200" cy="100" r="22" fill={chakraColor} fillOpacity="0.3" filter="url(#glow)" />
                  <g transform="translate(165, 115) rotate(-10)">
                    <rect x="-18" y="-28" width="36" height="56" rx="16" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(235, 115) rotate(10)">
                    <rect x="-18" y="-28" width="36" height="56" rx="16" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#e0e7ff" fontSize="13" fontWeight="600">
                    Palmas en cuenco sobre ojos y pómulos
                  </text>
                </g>
              )}

              {/* Temples */}
              {visualCue === 'temples' && (
                <g>
                  <path d="M 155 140 C 155 70 172 35 200 35 C 228 35 245 70 245 140 C 245 190 228 220 200 220 C 172 220 155 190 155 140 Z" fill="#292524" stroke="#a8a29e" strokeWidth="2" />
                  <g transform="translate(142, 130) rotate(-15)">
                    <rect x="-16" y="-30" width="32" height="60" rx="14" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(258, 130) rotate(15)">
                    <rect x="-16" y="-30" width="32" height="60" rx="14" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#e0e7ff" fontSize="13" fontWeight="600">
                    Sienes y Oídos (Lóbulos Temporales)
                  </text>
                </g>
              )}

              {/* Occipital */}
              {visualCue === 'occipital' && (
                <g>
                  <path d="M 150 130 C 150 65 170 30 200 30 C 230 30 250 65 250 130 C 250 185 235 210 200 215 C 165 210 150 185 150 130 Z" fill="#292524" stroke="#a8a29e" strokeWidth="2" />
                  <ellipse cx="200" cy="180" rx="42" ry="24" fill={chakraColor} fillOpacity="0.3" filter="url(#glow)" />
                  <g transform="translate(175, 185) rotate(-20)">
                    <rect x="-16" y="-26" width="32" height="52" rx="14" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(225, 185) rotate(20)">
                    <rect x="-16" y="-26" width="32" height="52" rx="14" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#f3e8ff" fontSize="13" fontWeight="600">
                    Nuca, Atlas y Hueso Occipital
                  </text>
                </g>
              )}

              {/* Throat */}
              {visualCue === 'throat' && (
                <g>
                  <circle cx="200" cy="70" r="32" fill="#292524" stroke="#78716c" strokeWidth="1.5" />
                  <circle cx="200" cy="140" r="34" fill={chakraColor} fillOpacity="0.35" filter="url(#glow)" />
                  <g transform="translate(170, 142) rotate(-15)">
                    <rect x="-14" y="-24" width="28" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(230, 142) rotate(15)">
                    <rect x="-14" y="-24" width="28" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#bae6fd" fontSize="13" fontWeight="600">
                    Garganta y Cuello (Vishuddha)
                  </text>
                </g>
              )}

              {/* Heart */}
              {visualCue === 'heart' && (
                <g>
                  <circle cx="200" cy="45" r="26" fill="#292524" stroke="#78716c" strokeWidth="1.5" />
                  <circle cx="200" cy="145" r="42" fill={chakraColor} fillOpacity="0.4" filter="url(#glow)" />
                  <g transform="translate(182, 130) rotate(-10)">
                    <rect x="-15" y="-24" width="30" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(218, 155) rotate(10)">
                    <rect x="-15" y="-24" width="30" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#a7f3d0" fontSize="13" fontWeight="600">
                    Chakra Corazón y Glándula Timo
                  </text>
                </g>
              )}

              {/* Solar Plexus */}
              {visualCue === 'solar_plexus' && (
                <g>
                  <circle cx="200" cy="145" r="38" fill={chakraColor} fillOpacity="0.4" filter="url(#glow)" />
                  <g transform="translate(170, 145) rotate(-5)">
                    <rect x="-15" y="-26" width="30" height="52" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(230, 145) rotate(5)">
                    <rect x="-15" y="-26" width="30" height="52" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="600">
                    Plexo Solar y Boca del Estómago
                  </text>
                </g>
              )}

              {/* Abdomen / Hara */}
              {(visualCue === 'abdomen' || visualCue === 'root_groin') && (
                <g>
                  <circle cx="200" cy="140" r="40" fill={chakraColor} fillOpacity="0.4" filter="url(#glow)" />
                  <g transform="translate(200, 130)">
                    <rect x="-42" y="-14" width="84" height="28" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(200, 160)">
                    <rect x="-42" y="-14" width="84" height="28" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#fed7aa" fontSize="13" fontWeight="600">
                    Vientre Bajo y Centro Hara / Tanden
                  </text>
                </g>
              )}

              {/* Shoulders */}
              {(visualCue === 'shoulders' || visualCue === 'upper_back') && (
                <g>
                  <circle cx="155" cy="110" r="28" fill={chakraColor} fillOpacity="0.3" filter="url(#glow)" />
                  <circle cx="245" cy="110" r="28" fill={chakraColor} fillOpacity="0.3" filter="url(#glow)" />
                  <g transform="translate(155, 110)">
                    <rect x="-16" y="-24" width="32" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(245, 110)">
                    <rect x="-16" y="-24" width="32" height="48" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="600">
                    Hombros, Trapecios y Omóplatos
                  </text>
                </g>
              )}

              {/* Lower back */}
              {(visualCue === 'lower_back' || visualCue === 'sacrum') && (
                <g>
                  <ellipse cx="170" cy="135" rx="22" ry="28" fill={chakraColor} fillOpacity="0.35" filter="url(#glow)" />
                  <ellipse cx="230" cy="135" rx="22" ry="28" fill={chakraColor} fillOpacity="0.35" filter="url(#glow)" />
                  <g transform="translate(170, 135)">
                    <rect x="-15" y="-26" width="30" height="52" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(230, 135)">
                    <rect x="-15" y="-26" width="30" height="52" rx="12" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="600">
                    Riñones, Suprarrenales y Lumbares
                  </text>
                </g>
              )}

              {/* Feet / Knees */}
              {(visualCue === 'feet' || visualCue === 'knees') && (
                <g>
                  <circle cx="155" cy="210" r="28" fill={chakraColor} fillOpacity="0.4" filter="url(#glow)" />
                  <circle cx="225" cy="210" r="28" fill={chakraColor} fillOpacity="0.4" filter="url(#glow)" />
                  <g transform="translate(155, 205)">
                    <rect x="-24" y="-14" width="48" height="28" rx="10" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <g transform="translate(225, 205)">
                    <rect x="-24" y="-14" width="48" height="28" rx="10" fill="url(#handGrad)" stroke="#d97706" strokeWidth="2" />
                  </g>
                  <text x="200" y="265" textAnchor="middle" fill="#fecaca" fontSize="13" fontWeight="600">
                    Plantas de los Pies y Enraizamiento K-1
                  </text>
                </g>
              )}

              {/* Aura */}
              {visualCue === 'aura_smoothing' && (
                <g>
                  <ellipse cx="200" cy="140" rx="90" ry="120" stroke={chakraColor} strokeWidth="2.5" strokeDasharray="6 4" fill={chakraColor} fillOpacity="0.1" filter="url(#glow)" />
                  <text x="200" y="270" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="600">
                    Alisado y Sellado Áurico (a 15 cm)
                  </text>
                </g>
              )}
            </svg>
          </div>
        )}
      </div>

      {/* FULL-SCREEN ZOOM MODAL TO INSPECT REALISTIC HAND DETAILS */}
      {isZoomModalOpen && (
        <div 
          onClick={() => setIsZoomModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 text-stone-100 rounded-3xl max-w-3xl w-full overflow-hidden border border-stone-800 shadow-2xl relative"
          >
            {/* Modal header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400">Guía Anatómica de Precisión</span>
                <h3 className="text-lg font-serif font-bold text-white">{realisticInfo.title}</h3>
              </div>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image */}
            <div className="relative aspect-4/3 w-full bg-stone-950 overflow-hidden">
              <img
                src={realisticInfo.img}
                alt={realisticInfo.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Anatomical Details Footer */}
            <div className="p-5 space-y-2 bg-stone-900 border-t border-stone-800">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-medium">
                  {realisticInfo.anatomicalGuide}
                </p>
              </div>
              <p className="text-[11px] text-stone-400 pl-6">
                💡 Recuerda: las manos deben estar tibias, relajadas y sin tensión muscular en los dedos ni en las muñecas.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
