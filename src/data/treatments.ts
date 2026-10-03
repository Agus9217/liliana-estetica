import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'depilacion-laser',
    name: 'Depilación Definitiva Láser',
    tagline: 'Tecnología Láser de Alta Eficacia',
    category: 'laser',
    categoryLabel: 'Tecnología Láser',
    shortDesc: 'Una alternativa pensada para simplificar tu rutina de cuidado personal con sesiones adaptadas y confort continuo.',
    fullDesc: 'Trabajamos con equipamiento de última generación con cabezal ultra refrigerado que cuida la piel y minimiza molestias. El haz de luz actúa selectivamente sobre el folículo piloso debilitándolo progresivamente en cada sesión sin dañar los tejidos circundantes.',
    benefits: [
      'Reducción progresiva y duradera del vello desde la primera sesión',
      'Mejora notable en foliculitis y vellos encarnados',
      'Cabezal con enfriamiento activo para máxima comodidad',
      'Apto para diversas zonas faciales y corporales'
    ],
    recommendedSessions: '6 a 8 sesiones (intervalo cada 30-45 días)',
    sessionDuration: '20 a 60 minutos (según zonas)',
    targetAreas: ['Rostro completo / Bozo', 'Axilas', 'Cavado simple y completo', 'Pierna entera', 'Espalda y Pecho', 'Brazos'],
    preparationTips: [
      'Rasurar la zona con maquinita descartable 24 hs antes de la sesión',
      'No usar cera ni pinzas 15 días previos',
      'Asistir con la piel limpia, sin cremas, desodorantes ni autobronceantes',
      'Evitar exposición solar intensa 48 hs antes y después'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8zMJgemHWkxd-FiJU3J2meOex_QP53-EVYFV4RXFoEAPeGJUD-MmgwfJhuFiLh1jCWQS28nOInXnbthNFpy9SS-zkNN7EIcD41BZXnIcV_r7L9Zu9Xu3q5FLAa208SHjrYALZCisnitK0SLT8tEWRqAlYFa9Sm6M5_Hyvbb1oCn-utW-xVZpAIPB2ERkY0GYc3JAP8m_5o4KO0f62asiFqlZs6bb3IXEzXmgPl1qMecjlwlSMTiM',
    whatsappMessage: 'Hola Liliana, quisiera consultar por turnos y zonas para Depilación Definitiva Láser.',
    featured: true
  },
  {
    id: 'criolipolisis',
    name: 'Criolipólisis Plana',
    tagline: 'Modelación Corporal sin Cirugía',
    category: 'corporal',
    categoryLabel: 'Estética Corporal',
    shortDesc: 'Tratamiento no invasivo de modelación enfocado en panículo adiposo localizado mediante frío controlado.',
    fullDesc: 'La criolipólisis plana desciende la temperatura en la zona seleccionada de manera controlada y homogénea sin succión agresiva, provocando la apoptosis selectiva de las células grasas que luego el organismo elimina progresivamente por vías metabólicas naturales.',
    benefits: [
      'Disminución del espesor del tejido adiposo localizado',
      'Sin período de recuperación: volvés de inmediato a tus actividades',
      'Sistema de placas planas sin hematomas por succión brusca',
      'Resultados graduales, naturales y armónicos'
    ],
    recommendedSessions: '2 a 4 sesiones por zona (cada 30 a 45 días)',
    sessionDuration: '45 a 60 minutos',
    targetAreas: ['Abdomen alto y bajo', 'Flancos / Cintura', 'Pantalón de montar', 'Subglúteos', 'Brazos'],
    preparationTips: [
      'Ingerir abundante agua antes y después de cada sesión',
      'Llevar ropa holgada y cómoda para el tratamiento',
      'No realizar comidas copiosas en las 2 horas previas'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrkveh_l3Qs6pnpnX13BM_rGQ4EGXKzNjaTXzdWB9caER8AiwTF658cy37-_LbOgDdCI9qQmGkq00Vqg9aOfYp3WyZnJk3RKP5sbc6HuUaxyZFnb11fiw0vXei1zFIgKmtYz6EUXyzqHwUP7BcVLUlmC6SMIdc0XBl6INMmYS_JzIzXAIBqO5S7DZi97Lxbl3fRvkI8Rm-0t45NJNcpWW4eh4XqB-MMm15oQSXj_r9dzLIcC1f1kw',
    whatsappMessage: 'Hola Liliana, quisiera consultar por el tratamiento de Criolipólisis Plana y evaluación previa.',
    featured: true
  },
  {
    id: 'radiofrecuencia',
    name: 'Radiofrecuencia Facial y Corporal',
    tagline: 'Firmeza, Colágeno y Tersura',
    category: 'facial',
    categoryLabel: 'Facial & Corporal',
    shortDesc: 'Estimulación térmica profunda que reactiva la producción de colágeno y elastina para tensar y tonificar la piel.',
    fullDesc: 'Mediante energía electromagnética que genera una agradable hipertermia en las capas intermedias de la dermis, la radiofrecuencia contrae las fibras colágenas existentes y activa a los fibroblastos para sintetizar nuevo colágeno, logrando un efecto tensor progresivo y revitalizante.',
    benefits: [
      'Efecto lifting no invasivo y reafirmante',
      'Suaviza líneas de expresión en rostro y cuello',
      'Aumenta la densidad y luminosidad de la piel',
      'Sensación placentera de calor reconfortante'
    ],
    recommendedSessions: '4 a 6 sesiones (quincenales o mensuales)',
    sessionDuration: '45 minutos',
    targetAreas: ['Rostro y Óvalo facial', 'Cuello y Escote', 'Abdomen postparto', 'Brazos', 'Muslos'],
    preparationTips: [
      'Concurrir con el rostro libre de maquillaje en sesiones faciales',
      'Mantener la piel adecuadamente hidratada en los días previos',
      'Uso diario de protector solar FPS 50+'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe2i2PZdWdhk2zIUnH3VHIYw4i1GlJHbn5gtDdA-5WqJOevnCmHHG6Q9HHSapZR7PJu6KpjdCLPaFVY72szfDTQ34dTBshxfVzkpyoLP1hndEglYGDd03mYwwN7Z1j_47ApEXdPMLSsJLExBvkcSmF_PckDjCr8_dDf4Da2pz2tS_Jw0sqc6GCpyCGcC1THRGGN9PdIXeBHKP3aBZ55yBOfkbeqmNiBUUxGBHQ7GGKdGz9hH83S0Q',
    whatsappMessage: 'Hola Liliana, quisiera consultar sobre sesiones de Radiofrecuencia facial/corporal.',
    featured: true
  },
  {
    id: 'ultracavitacion',
    name: 'Ultracavitación de Alta Potencia',
    tagline: 'Reducción y Contorno Focalizado',
    category: 'corporal',
    categoryLabel: 'Modelación',
    shortDesc: 'Ondas ultrasónicas de baja frecuencia que actúan sobre adiposidades rebeldes para remodelar la silueta.',
    fullDesc: 'La ultracavitación genera microburbujas en el tejido adiposo que colapsan rompiendo los acúmulos grasos más resistentes. Es el complemento ideal para combinar con presoterapia o drenaje linfático asistido para acelerar la eliminación de toxinas.',
    benefits: [
      'Disminución de centímetros en áreas focales',
      'Mejora notable del aspecto de la celulitis compacta',
      'Tratamiento indoloro y seguro con seguimiento profesional',
      'Sinergia excelente con presoterapia o electrodos'
    ],
    recommendedSessions: '6 a 10 sesiones semanales',
    sessionDuration: '30 a 45 minutos',
    targetAreas: ['Abdomen y Flancos', 'Pantalón de montar', 'Muslos posterior y anterior', 'Glúteos'],
    preparationTips: [
      'Beber 1,5 a 2 litros de agua antes de la sesión',
      'Complementar con una caminata ligera post tratamiento para optimizar el gasto calórico'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrkveh_l3Qs6pnpnX13BM_rGQ4EGXKzNjaTXzdWB9caER8AiwTF658cy37-_LbOgDdCI9qQmGkq00Vqg9aOfYp3WyZnJk3RKP5sbc6HuUaxyZFnb11fiw0vXei1zFIgKmtYz6EUXyzqHwUP7BcVLUlmC6SMIdc0XBl6INMmYS_JzIzXAIBqO5S7DZi97Lxbl3fRvkI8Rm-0t45NJNcpWW4eh4XqB-MMm15oQSXj_r9dzLIcC1f1kw',
    whatsappMessage: 'Hola Liliana, quisiera coordinar una consulta por Ultracavitación.',
    featured: false
  },
  {
    id: 'presoterapia',
    name: 'Presoterapia Secuencial',
    tagline: 'Drenaje Linfático y Alivio Circulatorio',
    category: 'relax',
    categoryLabel: 'Drenaje & Alivio',
    shortDesc: 'Masaje neumático que estimula la circulación de retorno, reduce retención de líquidos y brinda profunda liviandad.',
    fullDesc: 'A través de botas neumáticas con cámaras de aire superpuestas que se inflan y desinflan con presiones secuenciales desde los pies hacia el abdomen, se activa el sistema linfático y circulatorio, favoreciendo la eliminación de edemas y descansando las piernas fatigadas.',
    benefits: [
      'Alivio inmediato de pesadez, edema y retención hídrica',
      'Estimulación del sistema inmunológico y linfático',
      'Prevención y mejoramiento de várices iniciales y celulitis edematosa',
      'Experiencia de descanso y desconexión total'
    ],
    recommendedSessions: '8 a 10 sesiones (1 o 2 por semana)',
    sessionDuration: '30 a 40 minutos',
    targetAreas: ['Piernas completas', 'Abdomen', 'Glúteos'],
    preparationTips: [
      'Vestir calzas o medias de algodón limpias para ingresar a las botas',
      'Mantenerse bien hidratada durante todo el día'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8zMJgemHWkxd-FiJU3J2meOex_QP53-EVYFV4RXFoEAPeGJUD-MmgwfJhuFiLh1jCWQS28nOInXnbthNFpy9SS-zkNN7EIcD41BZXnIcV_r7L9Zu9Xu3q5FLAa208SHjrYALZCisnitK0SLT8tEWRqAlYFa9Sm6M5_Hyvbb1oCn-utW-xVZpAIPB2ERkY0GYc3JAP8m_5o4KO0f62asiFqlZs6bb3IXEzXmgPl1qMecjlwlSMTiM',
    whatsappMessage: 'Hola Liliana, quisiera consultar por sesiones de Presoterapia secuencial.',
    featured: false
  },
  {
    id: 'electrodos',
    name: 'Electroestimulación (Ondas Rusas)',
    tagline: 'Tonificación y Firmeza Muscular',
    category: 'corporal',
    categoryLabel: 'Tonificación',
    shortDesc: 'Gimnasia pasiva mediante corrientes excitomotrices que fortalecen la masa muscular y modelan la silueta.',
    fullDesc: 'Los electrodos emiten impulsos eléctricos calibrados que provocan contracciones musculares rítmicas e intensas en zonas específicas, mejorando el tono, la firmeza y levantando glúteos sin sobrecargar articulaciones ni provocar fatiga cardiovascular.',
    benefits: [
      'Tonificación muscular intensiva en zonas difíciles',
      'Levantamiento y modelado de glúteos',
      'Aceleración del metabolismo local',
      'Intensidad graduable y 100% personalizada'
    ],
    recommendedSessions: '8 a 12 sesiones (2 veces por semana)',
    sessionDuration: '30 a 45 minutos',
    targetAreas: ['Glúteos', 'Abdomen', 'Piernas / Cuádriceps', 'Brazos'],
    preparationTips: [
      'Concurrir con ropa deportiva cómoda',
      'Evitar aplicar cremas oleosas en la zona antes del turno'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrkveh_l3Qs6pnpnX13BM_rGQ4EGXKzNjaTXzdWB9caER8AiwTF658cy37-_LbOgDdCI9qQmGkq00Vqg9aOfYp3WyZnJk3RKP5sbc6HuUaxyZFnb11fiw0vXei1zFIgKmtYz6EUXyzqHwUP7BcVLUlmC6SMIdc0XBl6INMmYS_JzIzXAIBqO5S7DZi97Lxbl3fRvkI8Rm-0t45NJNcpWW4eh4XqB-MMm15oQSXj_r9dzLIcC1f1kw',
    whatsappMessage: 'Hola Liliana, quisiera consultar por planes de electrodos y tonificación.',
    featured: false
  },
  {
    id: 'masajes-terapeuticos',
    name: 'Masajes Terapéuticos y Descontracturantes',
    tagline: 'Bienestar, Alivio y Relajación Integral',
    category: 'relax',
    categoryLabel: 'Relax & Salud',
    shortDesc: 'Técnicas manuales especializadas para liberar contracturas, reducir tensiones acumuladas y renovar tu energía.',
    fullDesc: 'En un espacio cálido con aromaterapia y música sedativa, aplicamos maniobras profundas que relajan la musculatura de cuello, espalda y cintura, mejorando la postura y disipando el estrés cotidiano en un ambiente de absoluta paz.',
    benefits: [
      'Alivio de contracturas en cuello, trapecios y lumbares',
      'Disminución del estrés y mejora del descanso nocturno',
      'Reactiva la microcirculación y oxigena los tejidos',
      'Atención 1 a 1 en cabina privada y confortable'
    ],
    recommendedSessions: 'Sesiones puntuales o frecuencia quincenal de mantenimiento',
    sessionDuration: '45 a 60 minutos',
    targetAreas: ['Espalda completa', 'Cuello y hombros', 'Piernas y pies', 'Cuerpo entero'],
    preparationTips: [
      'Disponer de tiempo libre post sesión para prolongar el efecto de relajación',
      'Informar sobre cirugías recientes o afecciones de columna'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrWeXRcO7C0qZAoZJ1Qb9DV5rIeGWH8_IBIVR1n7lYjSndfQZd8oPCsZL_92Hp-PnhrjONiuB5mlPIAYtTalORSZmwXJIZU8gagmsvmLSBCweXbz8dA_4W3lrvx8BPXCp2zLfhsXm0iefKCH-FzTGi7EX42tECDLeBrUZEaHBJJvowV5pm-S12g_obKCBywznz2NxMZzG6IWWToOU42mTAcBZcOs0IDZ8-2Z3oO_KbqsfkeeiDU4g',
    whatsappMessage: 'Hola Liliana, quisiera reservar un turno para Masajes Descontracturantes/Relajantes.',
    featured: true
  },
  {
    id: 'estetica-facial',
    name: 'Higiene Facial Profunda y Dermoestética',
    tagline: 'Luminosidad, Purificación y Cuidado Dérmico',
    category: 'facial',
    categoryLabel: 'Cuidado Facial',
    shortDesc: 'Limpieza profunda con punta de diamante, extracción suave, máscaras descongestivas y nutrición personalizada.',
    fullDesc: 'Protocolo completo adaptado a tu biotipo cutáneo (piel sensible, mixta, deshidratada o madura). Incluye exfoliación mecánica suave, pulido con punta de diamante, extracción de impurezas sin agredir, sueros de alta penetración y máscara calmante revitalizante.',
    benefits: [
      'Piel limpia, luminosa, suave y descongestionada',
      'Disminución visible del tamaño de los poros y puntos negros',
      'Mayor receptividad a tus cremas y activos de rutina diaria',
      'Asesoramiento profesional para tu cuidado en casa'
    ],
    recommendedSessions: '1 sesión mensual o bimestral según biotipo',
    sessionDuration: '60 minutos',
    targetAreas: ['Rostro completo', 'Cuello y Escote'],
    preparationTips: [
      'No aplicar ácidos ni exfoliantes químicos 3 días previos',
      'No exponerse a radiación solar directa 24 hs posteriores',
      'Seguir las recomendaciones de hidratación dadas en el gabinete'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe2i2PZdWdhk2zIUnH3VHIYw4i1GlJHbn5gtDdA-5WqJOevnCmHHG6Q9HHSapZR7PJu6KpjdCLPaFVY72szfDTQ34dTBshxfVzkpyoLP1hndEglYGDd03mYwwN7Z1j_47ApEXdPMLSsJLExBvkcSmF_PckDjCr8_dDf4Da2pz2tS_Jw0sqc6GCpyCGcC1THRGGN9PdIXeBHKP3aBZ55yBOfkbeqmNiBUUxGBHQ7GGKdGz9hH83S0Q',
    whatsappMessage: 'Hola Liliana, quisiera agendar un turno para Higiene Facial Profunda.',
    featured: true
  }
];
