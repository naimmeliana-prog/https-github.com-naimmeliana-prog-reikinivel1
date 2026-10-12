import { HandPosition } from '../types/reiki';

export const OTHER_TREATMENT_POSITIONS: HandPosition[] = [
  {
    id: 'other-prep-space-gassho',
    name: 'Fase 1: Preparación, Kenyoku-ho y Conexión',
    title: '1. Preparación Ética y Apertura de Canal',
    category: 'inicio_cierre',
    chakraId: 7,
    chakraName: 'Sahasrara (Corona)',
    chakraColor: '#7E22CE',
    bodyArea: 'De pie junto a la camilla o asiento del receptor',
    handsDescription: 'Realiza Kenyoku (baño seco en hombros y brazos). Junta las manos en Gassho. Pide permiso interior al alma del receptor.',
    intention: 'Recordar que no soy el sanador, sino un canal puro y desapegado de la Energía Universal Reiki. No imponer ego ni forzar resultados.',
    suggestedPrayer: '«Pido ser un canal puro de la Energía Universal Reiki para el mayor bien de [Nombre de la persona]. Que la energía fluya hacia donde más lo necesite, en perfecto orden divino y armonía. Gracias.»',
    benefits: [
      'Protege el campo energético del practicante evitando absorción de densidades.',
      'Genera una atmósfera de respeto sagrado y confianza en el receptor.',
      'Sintoniza la frecuencia de ambas auras para una sesión armónica.'
    ],
    visualCue: 'gassho',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Observa la respiración del receptor mientras se serena al notar tu presencia calmada.'
  },
  {
    id: 'other-byosen-scan',
    name: 'Fase 2: Escaneo Byosen (Exploración Áurica)',
    title: '2. Escaneo Byosen Reikan-ho',
    category: 'inicio_cierre',
    chakraId: 6,
    chakraName: 'Ajna / Sensibilidad Intuitiva',
    chakraColor: '#4338CA',
    bodyArea: 'Aura a 10-15 cm por encima del cuerpo, de coronilla a pies',
    handsDescription: 'Desplaza lentamente tus palmas abiertas a unos 10-15 cm sobre el cuerpo del receptor, desde la cabeza hasta los pies, sin tocar.',
    intention: 'Escuchar el lenguaje del campo sutil: detectar zonas frías (vacío energético), muy calientes (inflamación/estrés), punzadas o densidades.',
    suggestedPrayer: '«Mis manos sienten con amor y neutralidad. Que mis palmas reconozcan los lugares donde el flujo de vida requiere mayor asistencia luminosa.»',
    benefits: [
      'Desarrolla la intuición táctil y la sensibilidad Byosen de Reiki Nivel 1.',
      'Permite personalizar el tiempo en los puntos que muestren mayor demanda.',
      'Prepara el cuerpo sutil del receptor para recibir la imposición de manos.'
    ],
    visualCue: 'aura_smoothing',
    durationMinutesRecommendation: 2,
    sensationsTip: 'No juzgues lo que sientas; una leve brisa fría o tirón magnético te indicará dónde detenerte con más cariño.'
  },
  {
    id: 'other-head-1-eyes',
    name: 'Cabeza: Ojos y Tercer Ojo (Ajna)',
    title: '3. Ojos, Frente y Chakra Ajna',
    category: 'cabeza',
    chakraId: 6,
    chakraName: 'Ajna (Tercer Ojo)',
    chakraColor: '#4338CA',
    bodyArea: 'Ojos y frente del receptor',
    handsDescription: 'Situado/a detrás de la cabeza del receptor, apoya tus palmas muy suavemente en copa sobre sus ojos y entrecejo (sin presionar la nariz).',
    intention: 'Inducir relajación alfa profunda, calmar el estrés mental y disipar pensamientos angustiosos.',
    suggestedPrayer: '«Que la Luz de Reiki limpie toda preocupación, estrés y fatiga visual de [Nombre]. Que su mente halle calma serena y claridad interior.»',
    benefits: [
      'Desactiva el estado de alerta cerebral e induce sueño reparador.',
      'Alivia cefaleas tensionales y tensión ocular provocada por el trabajo.',
      'Equilibra la glándula pituitaria y las secreciones hormonales del estrés.'
    ],
    visualCue: 'eyes',
    durationMinutesRecommendation: 3,
    sensationsTip: 'A menudo notarás un cambio audible en la respiración del receptor, haciéndose más lenta y acompasada.'
  },
  {
    id: 'other-head-2-temples',
    name: 'Cabeza: Sienes y Oídos',
    title: '4. Sienes y Pabellones Auditivos',
    category: 'cabeza',
    chakraId: 6,
    chakraName: 'Ajna Lateral',
    chakraColor: '#4338CA',
    bodyArea: 'Laterales del cráneo sobre las sienes y orejas',
    handsDescription: 'Coloca una palma en cada sien y oreja del receptor, cubriéndolas con la delicadeza de una almohada de seda.',
    intention: 'Alinear y sincronizar ambos hemisferios cerebrales, promoviendo el silencio mental y la paz auditiva.',
    suggestedPrayer: '«Reiki bendito, equilibra la mente consciente y subconsciente de [Nombre]. Que se disuelvan las voces del juicio y reine la armonía.»',
    benefits: [
      'Alivia jaquecas, vértigos leves y tensiones temporomandibulares.',
      'Estimula los puntos reflejos de acupuntura presentes en la oreja.',
      'Crea una burbuja de aislamiento acústico sumamente tranquilizadora.'
    ],
    visualCue: 'temples',
    durationMinutesRecommendation: 3,
    sensationsTip: 'El receptor puede experimentar sensaciones de flotar o visualizar luces de colores tenues.'
  },
  {
    id: 'other-head-3-occipital',
    name: 'Cabeza: Occipital y Atlas',
    title: '5. Nuca, Occipucio y Base Craneal',
    category: 'cabeza',
    chakraId: 7,
    chakraName: 'Sahasrara / Bulbo Raquídeo',
    chakraColor: '#7E22CE',
    bodyArea: 'Debajo de la cabeza del receptor, en la base del cráneo',
    handsDescription: 'Introduce con suavidad tus manos bajo la cabeza del receptor, acunando el hueso occipital como una almohada viva.',
    intention: 'Desbloquear miedos ancestrales, soltar el control rígido y relajar la musculatura cervical profunda.',
    suggestedPrayer: '«Que se libere toda memoria de miedo o tensión en el bulbo raquídeo de [Nombre]. Que descanse seguro/a en la gracia divina.»',
    benefits: [
      'Produce la máxima relajación del sistema nervioso simpático.',
      'Alivia contracturas cervicales y tortícolis.',
      'Estimula el centro respiratorio y cardíaco hacia una calma homeostática.'
    ],
    visualCue: 'occipital',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Sentirás que el peso del cráneo del receptor se entrega por completo a tus manos al soltar la defensa muscular.'
  },
  {
    id: 'other-head-4-throat',
    name: 'Garganta: Vishuddha y Cervicales',
    title: '6. Chakra de la Garganta y Cuello',
    category: 'cabeza',
    chakraId: 5,
    chakraName: 'Vishuddha (Garganta)',
    chakraColor: '#0284C7',
    bodyArea: 'Cuello anterior / lateral del receptor',
    handsDescription: 'Sitúa tus manos a 2-3 cm sobre la garganta o posa los bordes de las palmas muy suavemente en los laterales del cuello (nunca oprimir la tráquea).',
    intention: 'Desbloquear palabras atrapadas, aliviar la angustia de no poder comunicarse y armonizar la glándula tiroides.',
    suggestedPrayer: '«Luz azul de Reiki, purifica el canal de expresión de [Nombre]. Que su voz y su corazón se unan en una comunicación honesta y amorosa.»',
    benefits: [
      'Regula el metabolismo a través del equilibrio de la tiroides.',
      'Disuelve la opresión en el cuello provocada por angustias reprimidas.',
      'Despeja las vías respiratorias superiores.'
    ],
    visualCue: 'throat',
    durationMinutesRecommendation: 3,
    sensationsTip: 'El receptor puede toser levemente o tragar saliva; indícale previamente que cualquier reacción es normal y bienvenida.'
  },
  {
    id: 'other-front-1-heart',
    name: 'Frontal: Chakra Corazón (Anahata)',
    title: '7. Centro del Pecho y Glándula Timo',
    category: 'frontal',
    chakraId: 4,
    chakraName: 'Anahata (Corazón)',
    chakraColor: '#059669',
    bodyArea: 'Esternón y centro del tórax (respetando la intimidad)',
    handsDescription: 'Coloca una mano sobre el timo (esternón alto) y la otra en el centro del pecho, o a 3 cm sobre la zona en mujeres por respeto.',
    intention: 'Sanar el duelo, sanar las penas del corazón, restaurar la capacidad de amar y sentirse amado sin miedo.',
    suggestedPrayer: '«Envuélvete, [Nombre], en la luz esmeralda del amor universal. Suelta los dolores antiguos; tu corazón es sagrado, digno y libre de sufrir.»',
    benefits: [
      'Fortalece el sistema inmunitario al irradiar el timo.',
      'Alivia la opresión torácica asociada a la angustia o el pánico.',
      'Produce frecuentemente una sensación de liberación con suspiros hondos.'
    ],
    visualCue: 'heart',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Tus palmas pueden calentarse notablemente como dos pequeños hornos de compasión.'
  },
  {
    id: 'other-front-2-solar-plexus',
    name: 'Frontal: Plexo Solar (Manipura)',
    title: '8. Boca del Estómago y Plexo Solar',
    category: 'frontal',
    chakraId: 3,
    chakraName: 'Manipura (Plexo Solar)',
    chakraColor: '#CA8A04',
    bodyArea: 'Entre el ombligo y el esternón, bajo las costillas',
    handsDescription: 'Posiciona tus manos sobre la boca del estómago y el hipocondrio derecho/izquierdo (hígado, estómago y bazo).',
    intention: 'Ayudar a procesar las emociones difíciles (rabia, impotencia, miedo), restaurar el poder personal y la confianza.',
    suggestedPrayer: '«Fuego dorado de Reiki, purifica las emociones no digeridas de [Nombre]. Que su voluntad renazca en paz, firmeza y serenidad.»',
    benefits: [
      'Armoniza el sistema digestivo y mitiga espasmos estomacales.',
      'Drena el hígado y el bazo de sobrecargas emocionales y toxinas.',
      'Disuelve la rigidez diafragmática.'
    ],
    visualCue: 'solar_plexus',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Frecuentemente se escuchan sonidos digestivos (borborigmos); es una prueba fisiológica de relajación profunda.'
  },
  {
    id: 'other-front-3-abdomen',
    name: 'Frontal: Vientre Bajo (Svadhisthana / Tanden)',
    title: '9. Vientre Bajo y Centro Hara',
    category: 'frontal',
    chakraId: 2,
    chakraName: 'Svadhisthana (Sacro)',
    chakraColor: '#EA580C',
    bodyArea: '3-5 cm por debajo del ombligo',
    handsDescription: 'Coloca ambas manos planas y en paralelo horizontal cubriendo el vientre bajo del receptor.',
    intention: 'Nutrir el almacén de energía vital (Hara), liberar culpas reprimidas y restaurar la vitalidad creativa y emocional.',
    suggestedPrayer: '«Que la energía fluya libremente en el vientre de [Nombre], disolviendo la culpa y devolviéndole la alegría de vivir y crear.»',
    benefits: [
      'Regula el tránsito del intestino delgado y colon.',
      'Alivia tensiones en órganos reproductores femeninos y masculinos.',
      'Restaura la sensación de calor interno en personas friolentas o fatigadas.'
    ],
    visualCue: 'abdomen',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Imagina una suave esfera de luz anaranjada irradiando desde las manos hacia el centro pélvico.'
  },
  {
    id: 'other-front-4-root',
    name: 'Frontal: Hueso Púbico / Cadera (Muladhara)',
    title: '10. Crestas Ilíacas y Zona Pélvica',
    category: 'frontal',
    chakraId: 1,
    chakraName: 'Muladhara (Raíz)',
    chakraColor: '#DC2626',
    bodyArea: 'Caderas, ingles o a 5 cm sobre el pubis con total respeto',
    handsDescription: 'Posiciona las manos sobre las crestas ilíacas (caderas) o forma una V suspendida sobre la pelvis sin contacto invasivo.',
    intention: 'Anclar la seguridad existencial del receptor, eliminar el miedo a la escasez y solidificar sus cimientos.',
    suggestedPrayer: '«Reiki te ancla en la paz. Estás protegido/a, sostenido/a y seguro/a en este mundo. La abundancia y la fuerza vital te acompañan.»',
    benefits: [
      'Disipa miedos de supervivencia y crisis de arraigo.',
      'Relaja el músculo psoas (conocido como "el músculo del alma y del estrés").',
      'Descongestiona la pelvis y el inicio del nervio ciático.'
    ],
    visualCue: 'root_groin',
    durationMinutesRecommendation: 3,
    sensationsTip: 'El receptor suele experimentar una sensación de gran solidez y estabilidad corporal.'
  },
  {
    id: 'other-back-1-shoulders',
    name: 'Espalda: Trapecios y Escápulas',
    title: '11. Hombros y Espalda Alta (Dorsales)',
    category: 'espalda',
    chakraId: 4,
    chakraName: 'Anahata Posterior',
    chakraColor: '#059669',
    bodyArea: 'Hombros y zona interescapular (receptor de lado o boca abajo)',
    handsDescription: 'Apoya una palma sobre cada hombro/omóplato del receptor, aplicando una caricia firme y reconfortante.',
    intention: 'Aliviar las cargas y responsabilidades que la persona lleva sobre sus espaldas; permitir que reciba apoyo.',
    suggestedPrayer: '«Que caiga de los hombros de [Nombre] todo peso innecesario. Que reconozca que no camina solo/a y se permita ser sostenido/a.»',
    benefits: [
      'Descontractura trapecios, romboides y musculatura dorsal.',
      'Abre la parte posterior del tórax para una mayor capacidad pulmonar.',
      'Libera la tensión crónica de quienes cuidan a otros y se descuidan a sí mismos.'
    ],
    visualCue: 'shoulders',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Sentirás cómo los omóplatos se relajan y se expanden hacia los lados de la camilla.'
  },
  {
    id: 'other-back-2-kidneys',
    name: 'Espalda: Riñones y Lumbares (Ming Men)',
    title: '12. Zona Lumbar y Glándulas Suprarrenales',
    category: 'espalda',
    chakraId: 3,
    chakraName: 'Manipura Posterior',
    chakraColor: '#CA8A04',
    bodyArea: 'Espalda media/baja, a la altura de los riñones',
    handsDescription: 'Coloca tus palmas planas sobre la región lumbar a ambos lados de la columna vertebral (nunca golpear ni presionar la columna).',
    intention: 'Rellenar la batería de energía vital del receptor, calmar la fatiga suprarrenal y disolver miedos profundos.',
    suggestedPrayer: '«Luz reparadora de Reiki, nutre los riñones de [Nombre] y recarga sus reservas vitales. Disuelve todo cansancio crónico.»',
    benefits: [
      'Alivia lumbalgias mecánicas y sobrecargas por posturas estáticas.',
      'Fortalece el sistema urogenital y las glándulas suprarrenales.',
      'Infunde una profunda sensación de recarga energética.'
    ],
    visualCue: 'lower_back',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Esta posición suele generar un calor especialmente denso y acogedor muy apreciado por el receptor.'
  },
  {
    id: 'other-ext-feet',
    name: 'Extremidades: Tobillos y Plantas de los Pies',
    title: '13. Enraizamiento en Pies y Tobillos',
    category: 'extremidades',
    chakraId: 1,
    chakraName: 'Muladhara / Anclaje Terrenal',
    chakraColor: '#DC2626',
    bodyArea: 'Pies y plantas del receptor',
    handsDescription: 'Toma los tobillos con suavidad o apoya tus palmas sobre las plantas de los pies cubriendo los empeines y metatarsos.',
    intention: 'Conectar al receptor con la Tierra, drenar cualquier exceso energético de la cabeza y asegurar un despertar lúcido y anclado.',
    suggestedPrayer: '«Enraizamos esta sanación en la Tierra física. Que [Nombre] camine con pasos firmes, claros y llenos de bendición.»',
    benefits: [
      'Evita la sensación de mareo o aturdimiento al finalizar la sesión.',
      'Estimula los cientos de terminaciones nerviosas y reflejas de la planta del pie.',
      'Armoniza el circuito de retorno venoso y linfático.'
    ],
    visualCue: 'feet',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Observa la temperatura de los pies; si estaban fríos al inicio, comprobarás que se han templado placenteramente.'
  },
  {
    id: 'other-close-aura-smooth',
    name: 'Fase Final: Barrido Áurico, Corte y Agradecimiento',
    title: '14. Cepillado del Aura y Desconexión',
    category: 'inicio_cierre',
    chakraId: 4,
    chakraName: 'Cierre Sagrado',
    chakraColor: '#059669',
    bodyArea: 'Campo electromagnético a 20 cm del cuerpo físico',
    handsDescription: 'Realiza 3 pases suaves de cepillado áurico de la cabeza a los pies. Sepárate un paso, sacude las manos suavemente, junta en Gassho y agradece.',
    intention: 'Sellar el trabajo lumínico, cortar los lazos energéticos temporales para que cada uno mantenga su propia energía limpia y dar gracias.',
    suggestedPrayer: '«Doy gracias a la Divina Energía Reiki por este canal de sanación para [Nombre]. Corto todo lazo energético temporal. Que la paz sea en ti y en mí. Gracias, gracias, gracias.»',
    benefits: [
      'Asegura la higiene energética indispensable para el terapeuta de Reiki 1.',
      'Evita que el practicante cargue con cansancio ajeno.',
      'Sella el aura del receptor permitiendo que el proceso de sanación continúe los días siguientes.'
    ],
    visualCue: 'aura_smoothing',
    durationMinutesRecommendation: 2,
    sensationsTip: 'Toca suavemente el hombro del receptor o llámale por su nombre en voz baja para invitarle a regresar sin prisas.'
  }
];
