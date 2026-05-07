import { HeroData } from '../components/hero/hero.model';
import { BreadcrumbItem } from '../components/breadcrumbs/breadcrumb.model';
import { Feature } from '../components/feature-item/feature.model';
import { InfoCardData } from '../components/info-card/info-card.model';
import { AdvantagesData } from '../components/advantages-banner/advantages.model';
import { TrustData } from '../components/trust-section/trust.model';

export const COMERCIOS_HERO_DATA: HeroData = {
  title: 'Somos la gran apuesta para tu negocio',
  description:
    'Nos esforzamos cada día en ofrecerte lo mejor a ti y a tus clientes, para conseguirlo te ofrecemos una financiación al alcance de todos para que comprar nunca haya sido tan fácil.',
  ctaText: 'Más información',
  ctaUrl: '/comercios/informacion',
  image: '/comercios/banner.jpg',
  imageAlt: 'Mujer profesional en una oficina representando comercios afiliados a Cetelem',
  loginTitle: 'Acceso a tu Área privada',
  loginButton: 'Iniciar sesión',
  forgotPasswordText: '¿Olvidé mi contraseña?',
  forgotPasswordUrl: '/comercios/recuperar-contrasena',
  userPlaceholder: 'Nombre de usuario',
  passwordPlaceholder: 'Clave de acceso'
};

export const COMERCIOS_BREADCRUMBS: BreadcrumbItem[] = [
  { label: 'Inicio', url: '/' },
  { label: 'Comercios', url: null }
];

export const COMERCIOS_FEATURES: Feature[] = [
  {
    icon: '/comercios/iconos/monitor.png',
    iconAlt: 'Icono monitor',
    title: 'Gestiona tus operaciones cómodamente',
    description:
      'Dispones de un área privada donde puedes gestionar tus operaciones 24 horas, 365 al año y de forma fácil e inmediata tienes acceso a la financiación de tus clientes.'
  },
  {
    icon: '/comercios/iconos/nube.png',
    iconAlt: 'Icono subida a la nube',
    title: 'Olvídate del papeleo: todo se hace digitalmente',
    description:
      'Gracias a la firma digital y a la subida de documentación desde la web, el proceso de venta es rápido y sin papeleos y totalmente digitalizado.'
  },
  {
    icon: '/comercios/iconos/bombilla.png',
    iconAlt: 'Icono bombilla',
    title: 'Apuesta por la innovación y la digitalización',
    description:
      'La innovación es la forma de adaptarse. Por ello le ofrecemos productos innovadores pensados para optimizar el servicio que vas a dar a tus clientes.'
  }
];

export const COMERCIOS_INFO_CARDS: InfoCardData[] = [
  {
    title: 'Cercanía',
    image: '/comercios/imagen-de-cercania.jpg',
    imageAlt:
      'Equipo comercial de Cetelem dispuesto a ayudar a comercios afiliados',
    description:
      'Disponemos de un equipo comercial especializado por sector que conoce las necesidades de tu negocio para ayudarte a sacar el máximo partido a la financiación.'
  },
  {
    title: 'Solución eCommerce',
    image: '/comercios/solucion-ecomerce.jpg',
    imageAlt:
      'Hombre con tablet usando una solución eCommerce de Cetelem',
    description:
      'Te ayudamos a integrar la financiación en tu tienda online con un proceso 100% digital que mejora la conversión y la experiencia de compra de tus clientes.'
  }
];

export const COMERCIOS_ADVANTAGES: AdvantagesData = {
  title: 'Ventajas para tu negocio, y para tus clientes',
  backgroundImage: '/comercios/iconos/ventajas-negocio/fondo.jpg',
  backgroundAlt: 'Comerciante atendiendo a una clienta en su tienda',
  bullets: [
    {
      icon: '/comercios/iconos/ventajas-negocio/smile.png',
      iconAlt: 'Icono cara sonriente',
      title: 'Facilidad de pago para tus clientes, comodidad para ti',
      description:
        'Ofrecer financiación a tus clientes es un motivo de peso para que digan sí a una compra'
    },
    {
      icon: '/comercios/iconos/ventajas-negocio/bolso.png',
      iconAlt: 'Icono bolsa de compra',
      title: 'Mueve tus ventas ofreciendo el pago a plazos',
      description:
        'Utiliza la financiación como herramienta de promoción y ventas para incrementar tus ingresos'
    }
  ],
  stepsTitle: 'Así funciona la web comercios',
  steps: [
    { number: '1', text: 'Solicitud y autorización instantánea del crédito.' },
    { number: '2', text: 'Firma digital y subida de documentación on line.' },
    { number: '3', text: 'Confirmación de pago de la operación en el momento.' }
  ]
};

export const COMERCIOS_TRUST: TrustData = {
  title: 'Tienes razones para poder confiar en Cetelem...',
  description:
    'En Cetelem somos líderes en Innovación, somos la empresa experta en préstamos al consumo perteneciente al grupo BNP. Con más de 30 años de exprencia y 3,5 millones de clientes ofrecemos la mejor atención y la mayor flexibilidad.',
  characterImage: '/comercios/personaje-cetelem-verde-final.jpg',
  characterAlt: 'Personaje verde de Cetelem saludando',
  stats: [
    {
      icon: '/comercios/razones-poder-confiar/medalla.png',
      iconAlt: 'Icono medalla',
      color: '#1FB1C7',
      value: 'Más de 30',
      unit: 'años',
      label: 'ofreciendo crédito en España'
    },
    {
      icon: '/comercios/razones-poder-confiar/puzzle.png',
      iconAlt: 'Icono puzzle',
      color: '#3A913F',
      value: 'Más de 1.500',
      unit: '',
      label: 'empleados'
    },
    {
      icon: '/comercios/razones-poder-confiar/personas.png',
      iconAlt: 'Icono personas',
      color: '#E5326D',
      value: 'Más de 3,5',
      unit: 'millones',
      label: 'de clientes'
    },
    {
      icon: '/comercios/razones-poder-confiar/tarjeta.png',
      iconAlt: 'Icono tarjeta',
      color: '#2D6A30',
      value: 'Más de 1,5',
      unit: 'millones',
      label: 'de tarjetas'
    }
  ]
};
