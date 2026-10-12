import { HandPosition } from '../types/reiki';

export const SELF_TREATMENT_POSITIONS: HandPosition[] = [
  {
    id: 'self-prep-gassho',
    name: 'Preparación: Kenyoku-ho y Gassho',
    title: '1. Conexión Inicial y Centramiento',
    category: 'inicio_cierre',
    chakraId: 4,
    chakraName: 'Anahata (Corazón)',
    chakraColor: '#059669',
    bodyArea: 'Manos juntas frente al pecho (Gassho)',
    handsDescription: 'Junta las palmas frente al chakra del corazón con los dedos apuntando hacia arriba, dejando un espacio hueco suave entre las palmas. Respira calmadamente.',
    intention: 'Desconectar de las tareas mundanas, vaciar la mente y recordar que soy un canal limpio de la Energía Universal Reiki.',
    suggestedPrayer: '«Pido humildemente a la Energía Universal de Reiki que fluya a través de mí para mi mayor bien y sanación integral. Que este autotratamiento devuelva la armonía a mi cuerpo, mente y espíritu. Gracias, gracias, gracias.»',
    benefits: [
      'Aquieta el sistema nervioso en menos de dos minutos.',
      'Sincroniza los dos hemisferios cerebrales.',
      'Abre el canal central (Sushumna) para la recepción fluida de Reiki.'
    ],
    visualCue: 'gassho',
    durationMinutesRecommendation: 2,
    sensationsTip: 'Nota cómo las yemas de tus dedos medios se tocan suavemente; siente el calor acumulándose entre las palmas.'
  },
  {
    id: 'self-head-1-eyes',
    name: 'Cabeza 1: Ojos y Tercer Ojo',
    title: '2. Rostro, Ojos y Frente',
    category: 'cabeza',
    chakraId: 6,
    chakraName: 'Ajna (Tercer Ojo)',
    chakraColor: '#4338CA',
    bodyArea: 'Ojos, frente, senos paranasales y entrecejo',
    handsDescription: 'Coloca suavemente las palmas en forma de copa sobre tus ojos cerrados, los dedos extendidos hacia la frente sin presionar los párpados.',
    intention: 'Disipar la fatiga visual, aliviar la rumiación de pensamientos y limpiar la percepción de prejuicios y temores.',
    suggestedPrayer: '«Luz pura de Reiki, limpia mis ojos y mi mente. Que pueda ver la verdad con amor, perdonar lo que veo y acoger la claridad divina en cada pensamiento.»',
    benefits: [
      'Alivia la vista cansada, dolores de cabeza frontales y sinusitis.',
      'Regula la glándula hipófisis (controladora del sistema endocrino).',
      'Desconecta el estrés derivado del uso excesivo de pantallas y análisis mental.'
    ],
    visualCue: 'eyes',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Suele sentirse un calor suave reconfortante; permite que los globos oculares se relajen hacia el fondo de las cuencas.'
  },
  {
    id: 'self-head-2-temples',
    name: 'Cabeza 2: Sienes y Oídos',
    title: '3. Sienes y Oídos (Lóbulos Temporales)',
    category: 'cabeza',
    chakraId: 6,
    chakraName: 'Ajna / Conexión Mental',
    chakraColor: '#4338CA',
    bodyArea: 'Laterales de la cabeza sobre las orejas y sienes',
    handsDescription: 'Apoya una palma en cada sien y oreja, cubriéndolas suavemente como almohadillas de calma y silencio.',
    intention: 'Equilibrar ambos hemisferios cerebrales (lógico e intuitivo), silenciar el ruido externo y sanar memorias auditivas hirientes.',
    suggestedPrayer: '«Equilibro mi mente racional con mi intuición sabia. Dejo marchar los ruidos del mundo y me abro a escuchar la voz de mi paz interior.»',
    benefits: [
      'Alivia acúfenos leves, migrañas y tensión mandibular (bruxismo).',
      'Promueve el equilibrio vestibular y la sensación de estabilidad.',
      'Favorece la relajación profunda y la creatividad integrativa.'
    ],
    visualCue: 'temples',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Percibirás una sensación de aislamiento sonoro reconfortante, como si te sumergieras en un santuario íntimo.'
  },
  {
    id: 'self-head-3-occipital',
    name: 'Cabeza 3: Nuca y Occipital',
    title: '4. Nuca, Base del Cráneo y Cerebelo',
    category: 'cabeza',
    chakraId: 7,
    chakraName: 'Sahasrara / Bulbo Raquídeo',
    chakraColor: '#7E22CE',
    bodyArea: 'Parte posterior de la cabeza, hueso occipital y atlas',
    handsDescription: 'Sostén la parte posterior de tu cabeza con ambas manos, descansando los dedos sobre la base del cráneo y nacimiento del cuello.',
    intention: 'Liberar el control subconsciente, relajar los mecanismos de alerta/huida y calmar temores arraigados en el pasado.',
    suggestedPrayer: '«Suelto la necesidad de controlarlo todo. Me entrego con confianza al orden perfecto del Universo y descanso en profunda seguridad.»',
    benefits: [
      'Relaja el bulbo raquídeo y el centro de control del sistema nervioso autónomo.',
      'Libera contracturas suboccipitales causadas por mala postura o tensión acumulada.',
      'Combate el insomnio y facilita estados meditativos alfa y theta.'
    ],
    visualCue: 'occipital',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Es común sentir una súbita pesadez en los hombros al descender los niveles de adrenalina corporal.'
  },
  {
    id: 'self-head-4-throat',
    name: 'Cabeza 4 / Garganta: Cuello y Tiroides',
    title: '5. Garganta, Laringe y Tiroides',
    category: 'cabeza',
    chakraId: 5,
    chakraName: 'Vishuddha (Garganta)',
    chakraColor: '#0284C7',
    bodyArea: 'Zona anterior del cuello, laringe y glándula tiroides',
    handsDescription: 'Coloca las palmas a los lados del cuello o suavemente en la garganta con las muñecas tocándose. (Si te causa agobio, levítalas a 2 cm).',
    intention: 'Desatascar emociones calladas, expresar mi verdad sin miedo a ser juzgado y regular el metabolismo.',
    suggestedPrayer: '«Doy voz a mi verdad con amor y honestidad. Disuelvo todo nudo en mi garganta y permito que mi expresión sea un puente de paz.»',
    benefits: [
      'Estimula y armoniza las glándulas tiroides y paratiroides.',
      'Alivia tensiones en las cuerdas vocales, faringe y cervicales.',
      'Ayuda a procesar situaciones atragantadas que nos cuesta digerir.'
    ],
    visualCue: 'throat',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Puedes sentir necesidad de tragar o soltar un bostezo largo; son señales saludables de desbloqueo energético.'
  },
  {
    id: 'self-front-1-heart',
    name: 'Frontal 1: Pecho, Corazón y Timo',
    title: '6. Chakra Corazón y Glándula Timo',
    category: 'frontal',
    chakraId: 4,
    chakraName: 'Anahata (Corazón)',
    chakraColor: '#059669',
    bodyArea: 'Centro del pecho, esternón y timo',
    handsDescription: 'Coloca ambas manos en el centro del pecho: una sobre la glándula timo (zona alta del esternón) y otra sobre el corazón, o ambas cruzadas.',
    intention: 'Sanar el dolor emocional, cultivar el perdón sincero hacia uno mismo y despertar el amor incondicional.',
    suggestedPrayer: '«Luz verde sanadora de Reiki, sana cada herida de mi corazón. Me perdono completamente, me acepto con ternura y elijo vivir en el amor.»',
    benefits: [
      'Refuerza el sistema inmunológico activando la energía de la glándula timo.',
      'Regula la presión arterial y el ritmo cardíaco desbocado por la ansiedad.',
      'Despeja la congoja, la soledad y la tristeza acumulada.'
    ],
    visualCue: 'heart',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Visualiza un suave resplandor verde esmeralda que se expande por tus costillas al inhalar.'
  },
  {
    id: 'self-front-2-solar-plexus',
    name: 'Frontal 2: Plexo Solar y Estómago',
    title: '7. Boca del Estómago y Plexo Solar',
    category: 'frontal',
    chakraId: 3,
    chakraName: 'Manipura (Plexo Solar)',
    chakraColor: '#CA8A04',
    bodyArea: 'Entre el ombligo y el esternón, zona gástrica y diafragma',
    handsDescription: 'Coloca las palmas planas sobre las costillas flotantes y la boca del estómago, descansando suavemente sobre el diafragma.',
    intention: 'Reconectar con mi poder personal, sanar la rabia reprimida, digerir las vivencias difíciles y confiar en mi capacidad.',
    suggestedPrayer: '«Reconozco mi fuerza interior y mi dignidad divina. Suelto los temores y la frustración; confío en mi capacidad para transformar mi realidad.»',
    benefits: [
      'Mejora la digestión, alivia la acidez gástrica y la gastritis nerviosa.',
      'Libera el diafragma tenso permitiendo respiraciones más profundas.',
      'Aumenta la determinación, la autoestima y la energía para actuar.'
    ],
    visualCue: 'solar_plexus',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Siente cómo el calor de tus manos irradia hacia el estómago, deshaciendo los nudos de nerviosismo.'
  },
  {
    id: 'self-front-3-abdomen',
    name: 'Frontal 3: Vientre Bajo y Tanden (Hara)',
    title: '8. Vientre Bajo y Segundo Chakra',
    category: 'frontal',
    chakraId: 2,
    chakraName: 'Svadhisthana (Sacro)',
    chakraColor: '#EA580C',
    bodyArea: 'Bajo vientre, 3 a 5 cm por debajo del ombligo',
    handsDescription: 'Coloca ambas manos en posición horizontal sobre el bajo vientre, abarcando intestinos y zona reproductiva.',
    intention: 'Desbloquear la creatividad, permitir el flujo de las emociones sin juzgarlas y sanar culpas ancestrales.',
    suggestedPrayer: '«Acepto el fluir sagrado de mis emociones. Libero la culpa y me permito disfrutar de la belleza y el gozo de existir.»',
    benefits: [
      'Favorece la salud de los órganos reproductores y urinarios.',
      'Regula el tránsito intestinal y alivia cólicos o inflamación.',
      'Armoniza el centro Hara (Tanden), reservorio japonés de la fuerza vital (Ki).'
    ],
    visualCue: 'abdomen',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Visualiza una cálida luz naranja amanecer que acuna tu vientre como un remanso de agua tibia.'
  },
  {
    id: 'self-front-4-root-groin',
    name: 'Frontal 4: Pelvis, Pubis e Ingles',
    title: '9. Pubis, Ingles y Chakra Raíz',
    category: 'frontal',
    chakraId: 1,
    chakraName: 'Muladhara (Raíz)',
    chakraColor: '#DC2626',
    bodyArea: 'Hueso púbico y pliegues de las ingles (manos en V)',
    handsDescription: 'Coloca tus palmas formando una suave "V" invertida con los talones de las manos hacia las caderas y los dedos orientados hacia el pubis.',
    intention: 'Enraizarse a la Madre Tierra, disolver la inseguridad material o existencial y afirmar el derecho inalienable a existir.',
    suggestedPrayer: '«Estoy seguro/a en este mundo. La Tierra me sostiene con generosidad infinita. Suelto la escasez y abrazo la plenitud de la vida.»',
    benefits: [
      'Alivia tensiones en el suelo pélvico, nervio ciático y caderas.',
      'Disipa ataques de pánico y ansiedad por desarraigo.',
      'Fortalece la sensación de protección y estabilidad terrenal.'
    ],
    visualCue: 'root_groin',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Nota una sensación de peso relajante en la pelvis y calor profundo irradiando hacia los muslos.'
  },
  {
    id: 'self-back-1-shoulders',
    name: 'Espalda 1: Trapecios y Omóplatos',
    title: '10. Hombros y Espalda Alta',
    category: 'espalda',
    chakraId: 4,
    chakraName: 'Anahata Posterior',
    chakraColor: '#059669',
    bodyArea: 'Hombros, trapecios y parte superior de la espalda',
    handsDescription: 'Cruza los brazos suavemente por delante del pecho y apoya cada mano sobre el hombro o trapecio opuesto.',
    intention: 'Soltar las cargas que no me corresponden, aligerar el peso de las responsabilidades ajenas y recibir apoyo.',
    suggestedPrayer: '«Entrego las cargas pesadas al Universo. Ya no necesito sostener el mundo solo/a. Elijo caminar ligero/a y en paz.»',
    benefits: [
      'Deshace contracturas crónicas por estrés postural en trapecios.',
      'Libera la coraza dorsal que protege el corazón del dolor.',
      'Brinda una reconfortante sensación de autoabrazo y autocuidado.'
    ],
    visualCue: 'shoulders',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Disfruta del calor del abrazo; con cada exhalación, deja caer los hombros 1 centímetro más lejos de las orejas.'
  },
  {
    id: 'self-back-2-kidneys',
    name: 'Espalda 2: Riñones y Suprarrenales',
    title: '11. Riñones, Glándulas Suprarrenales y Lumbares',
    category: 'espalda',
    chakraId: 3,
    chakraName: 'Manipura Posterior / Ming Men',
    chakraColor: '#CA8A04',
    bodyArea: 'Zona media de la espalda, sobre las costillas inferiores y riñones',
    handsDescription: 'Lleva las manos hacia atrás y apoya las palmas sobre la zona lumbar, a la altura de los riñones, dedos apuntando hacia abajo.',
    intention: 'Disolver el miedo ancestral almacenado en los riñones y recargar la energía vital heredada (Jing).',
    suggestedPrayer: '«Luz de Reiki, nutre mis riñones y disuelve todo temor arcaico. Restauro mi vitalidad inagotable y confío en mis recursos.»',
    benefits: [
      'Recarga las glándulas suprarrenales fatigadas por el estrés crónico.',
      'Alivia dolores lumbares mecánicos y emocionales.',
      'Estimula el punto Ming Men ("Puerta de la Vida"), fuente de vitalidad.'
    ],
    visualCue: 'lower_back',
    durationMinutesRecommendation: 4,
    sensationsTip: 'Sentirás una reconfortante faja de calor en los riñones que suele provocar un profundo bostezo de descanso.'
  },
  {
    id: 'self-ext-knees-feet',
    name: 'Extremidades: Rodillas y Pies',
    title: '12. Rodillas y Plantas de los Pies',
    category: 'extremidades',
    chakraId: 1,
    chakraName: 'Muladhara / Conexión a Tierra',
    chakraColor: '#DC2626',
    bodyArea: 'Rótulas de las rodillas y posteriormente plantas de los pies',
    handsDescription: 'Siéntate cómodo/a y coloca una mano sobre cada rodilla; luego abraza las plantas de los pies con las palmas sobre el punto K-1.',
    intention: 'Flexibilizar el ego ante los cambios de la vida, sanar el camino andado y anclar la energía recibida al plano terrenal.',
    suggestedPrayer: '«Flexibilizo mis pasos con humildad y valentía. Camino con paso firme, seguro y bendecido sobre esta Tierra.»',
    benefits: [
      'Alivia dolores articulares y fatiga en piernas cansadas.',
      'Previene el mareo energético tras el tratamiento mediante el enraizamiento.',
      'Cierra el circuito bioeléctrico conectando con el polo magnético terrestre.'
    ],
    visualCue: 'feet',
    durationMinutesRecommendation: 3,
    sensationsTip: 'Siente cómo el exceso de energía o calor desciende suavemente hacia la Tierra como agua cristalina.'
  },
  {
    id: 'self-close-aura',
    name: 'Cierre: Barrido Áurico y Gratitud',
    title: '13. Alisado del Aura y Cierre en Gassho',
    category: 'inicio_cierre',
    chakraId: 4,
    chakraName: 'Anahata / Sello Áurico',
    chakraColor: '#059669',
    bodyArea: 'Campo electromagnético a 10 cm del cuerpo físico',
    handsDescription: 'Pasa las manos suavemente de la cabeza a los pies a unos 10 cm del cuerpo (3 veces), y luego une las manos en Gassho en el pecho.',
    intention: 'Sellar el campo energético personal, agradecer a la energía Reiki y retornar al estado de vigilia con renovada vitalidad.',
    suggestedPrayer: '«Doy gracias a la Divina Energía Reiki, a los Maestros y a mi propio ser por este momento sagrado de sanación. La energía queda sellada en perfecta armonía. Así es y así será.»',
    benefits: [
      'Sella cualquier fuga en el campo áurico.',
      'Cierra conscientemente la sesión para evitar pérdida involuntaria de energía.',
      'Fija un estado duradero de gratitud y serenidad para el resto del día.'
    ],
    visualCue: 'aura_smoothing',
    durationMinutesRecommendation: 2,
    sensationsTip: 'Siente una película de luz dorada y protectora envolviendo todo tu contorno como un manto de paz.'
  }
];
