import { ReikiPrinciple } from '../types/reiki';

export const REIKI_PRINCIPLES: ReikiPrinciple[] = [
  {
    id: 1,
    japanese: '今日だけは 怒るな',
    romaji: 'Kyō dake wa, Okoru-na',
    spanish: 'Solo por hoy, no te enojes',
    reflection: 'La ira y el enfado son fugas masivas de energía vital (Ki). El principio no te pide reprimir la emoción humana, sino no apegarte a ella ni alimentar el fuego del resentimiento. Reconócela como una señal, respira y déjala pasar como una nube.',
    dailyPractice: 'Cuando sientas que la ira sube a tu pecho o mandíbula, junta las palmas en Gassho mentalmente, exhala largo por la boca y repite tres veces: «Solo por hoy, elijo la paz sobre tener la razón».'
  },
  {
    id: 2,
    japanese: '心配すな',
    romaji: 'Shinpai suna',
    spanish: 'Solo por hoy, no te preocupes',
    reflection: 'La preocupación (pre-ocuparse) gasta la energía del presente en proyectar catástrofes en un futuro imaginario. Confía en el orden divino del Universo: todo lo que necesitas llegará en el momento exacto en que estés listo/a para recibirlo.',
    dailyPractice: 'Lleva la mano al plexo solar cada vez que sientas angustia o anticipación ansiosa. Siente el calor de tu propia palma y recuerda que la vida siempre encuentra el camino hacia el equilibrio.'
  },
  {
    id: 3,
    japanese: '感謝して',
    romaji: 'Kansha shite',
    spanish: 'Solo por hoy, sé agradecido',
    reflection: 'La gratitud es el sintonizador más potente de la frecuencia Reiki. Cuando agradeces lo que ya tienes —el aire que respiras, el agua que bebes, las lecciones difíciles—, tu canal energético se expande instantáneamente hacia la abundancia cósmica.',
    dailyPractice: 'Al despertar y antes de poner un pie en el suelo, nombra tres cosas simples por las que estás sinceramente agradecido/a hoy.'
  },
  {
    id: 4,
    japanese: '業をはげめ',
    romaji: 'Gyō o hage-me',
    spanish: 'Solo por hoy, trabaja con diligencia y honestidad',
    reflection: 'En Reiki tradicional, "trabajar con diligencia" no significa obsesión laboral mercantil, sino perseverar con dedicación en tu propio crecimiento interior, en tu práctica diaria de imposición de manos y en actuar con integridad hacia los demás.',
    dailyPractice: 'Cumple tu autotratamiento aunque solo sean 10 minutos. Tu compromiso con tu propia luz es el mayor regalo que puedes ofrecer al entorno.'
  },
  {
    id: 5,
    japanese: '人に親切に',
    romaji: 'Hito ni shinsetsu ni',
    spanish: 'Solo por hoy, sé amable con los demás',
    reflection: 'Todos los seres que se cruzan en tu camino libran una batalla que desconoces. Al ser amable con una persona, un animal o una planta, estás reconociendo la misma Chispa Divina (Rei) que habita en ti. La compasión sana al que la da y al que la recibe.',
    dailyPractice: 'Dedica hoy una sonrisa consciente, un gesto generoso o una bendición silenciosa a alguien que te resulte difícil o indiferente.'
  }
];

export interface ConsistencyTip {
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  actionableStep: string;
}

export const CONSISTENCY_TIPS: ConsistencyTip[] = [
  {
    title: 'El periodo sagrado de los 21 días',
    subtitle: 'La cuarentena de purificación física y sutil',
    iconName: 'Sparkles',
    description: 'Tras la sintonización de Nivel 1, tu canal bioenergético experimenta un reajuste profundo durante 21 días (asociado a los 21 días de retiro y ayuno de Mikao Usui en el Monte Kurama). Durante este ciclo, las toxinas físicas y memorias celulares bloqueadas afloran suavemente para ser liberadas.',
    actionableStep: 'Prioriza tu autotratamiento diario durante 21 días consecutivos. Bebe abundante agua pura y descansa sin juzgar los cambios emocionales o sueños intensos que puedan aparecer.'
  },
  {
    title: 'El "Hábito Mínimo Viable" (Protocolo Express de 10 min)',
    subtitle: 'La constancia vence a la intensidad',
    iconName: 'Clock',
    description: 'Uno de los mayores errores tras el curso de Reiki 1 es pensar: «Si hoy no tengo 45 minutos para una sesión completa, no hago nada». Es infinitamente más poderoso hacer 10 minutos todos los días que 1 hora una vez al mes.',
    actionableStep: 'En días ocupados, realiza el "Protocolo de los 4 Centros Clave": 2 minutos y medio en Cabeza (Ojos/Frente), Corazón, Plexo Solar y Vientre Hara. ¡Tu canal se mantendrá activo y luminoso!'
  },
  {
    title: '¿Qué hacer si "no siento nada en las manos"?',
    subtitle: 'Confía en la inteligencia intrínseca de Reiki',
    iconName: 'HeartHandshake',
    description: 'Es normal que al principio no sientas calor abrasador o cosquilleo en cada posición. Reiki NO depende de tu fuerza mental ni de tu sugestión: la energía fluye siempre que colocas la intención. Las sensaciones táctiles (Byosen) se afinan con la práctica regular, como el oído de un músico.',
    actionableStep: 'Frota suavemente tus palmas durante 10 segundos antes de comenzar, sacude las muñecas, inhala profundamente y confía. La energía sabe adónde ir aunque tu mente no perciba nada en ese instante.'
  },
  {
    title: 'Crea tu rincón sagrado (Espacio Ancla)',
    subtitle: 'Condicionamiento ambiental de paz',
    iconName: 'Compass',
    description: 'Tener un espacio físico dedicado —un cojín, una manta agradable, una pequeña vela, un aroma a sándalo o lavanda— ayuda al cerebro a entrar en ondas alfa en segundos en cuanto te sientas allí.',
    actionableStep: 'Designa un rincón fijo en tu habitación o salón para tu práctica. Manténlo ordenado y libre de pantallas electrónicas activas.'
  },
  {
    title: 'Autotratamiento en la cama (Al despertar y al dormir)',
    subtitle: 'Integra el Reiki sin alterar tu agenda',
    iconName: 'SunMoon',
    description: 'La postura acostada en la cama es ideal para el autotratamiento. Al despertar por la mañana, 5 minutos de imposición en el corazón y plexo solar te cargan de vitalidad y serenidad para afrontar la jornada. Por la noche, te conduce a un sueño delta profundo.',
    actionableStep: 'Coloca tus manos en el pecho o vientre justo antes de dormir. Si te quedas dormido/a a mitad del tratamiento, no te preocupes: ¡Reiki continuará fluyendo armoniosamente durante el sueño!'
  }
];
