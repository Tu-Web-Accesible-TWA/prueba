import { MenuMobileItem } from "../models/menu.model";

// Datos del menú móvil
//SUBMENUS
const PRESTAMOS_SUBMENU_MOBILE: MenuMobileItem[] = [
  { label: 'Préstamos', url: '/prestamos', iconClass: 'fa-solid fa-wallet' },
  { label: 'Coche', url: '/prestamos/coche', iconClass: 'fa-solid fa-car' },
  { label: 'Reforma y hogar', url: '/prestamos/reforma', iconClass: 'fa-solid fa-house' }
];

const CUENTAS_SUBMENU_MOBILE: MenuMobileItem[] = [
  { label: 'Cuenta', url: '/cuentas', iconClass: 'fa-solid fa-building-columns' },
  { label: 'Cuenta Suma', url: '/cuentas/suma', iconClass: 'fa-solid fa-wallet' },
  { label: 'Cuenta Ahorro', url: '/cuentas/ahorro', iconClass: 'fa-solid fa-piggy-bank' },
  { label: 'Cuenta de Pago Básica', url: '/cuentas/pago-basic', iconClass: 'fa-solid fa-heart' }
];

const SEGUROS_SUBMENU_MOBILE: MenuMobileItem[] = [
  { label: 'Seguros', url: '/seguros', iconClass: 'fa-solid fa-umbrella' },
  { label: 'Enfermedades Graves', url: '/seguros/enf-gra', iconClass: 'fa-regular fa-hospital' },
  { label: 'Ciberseguro Tarjetas', url: '/seguros/ciber-tar', iconClass: 'fa-solid fa-display' },
  { label: 'Senior', url: '/seguros/senior', iconClass: 'fa-solid fa-person-cane' }
];

const MIS_SOLICITUDES_SUBMENU_MOBILE: MenuMobileItem[] = [
  { label: 'Mis Solicitudes', url: '/mis-solicitudes', iconClass: 'fa-solid fa-pen-to-square' },
  { label: 'Seguimiento de Solicitud', url: '/seguros/enf-gra', iconClass: 'fa-solid fa-clipboard-list' },
  { label: 'Preguntas Frecuentes', url: '/seguros/ciber-tar', iconClass: 'fa-regular fa-circle-question' }
];

//Menus
export const PARA_TI_DATA_MOBILE: MenuMobileItem[] = [
  { label: 'Para ti', url: '/para-ti' },
  { label: 'Comercios', url: '/comercios' },
  { label: 'Concesionarios', url: '/concesionarios' },
  { label: 'eCommerce', url: '/ecommerce' },
];

export const MAIN_MENU_DATA_MOBILE: MenuMobileItem[] = [
  { label: 'Préstamos', url: '/prestamos', items: PRESTAMOS_SUBMENU_MOBILE },
  { label: 'Tarjetas', url: '/tarjeta' },
  { label: 'Cuentas', url: '/concesionarios', items: CUENTAS_SUBMENU_MOBILE },
  { label: 'Depósitos', url: '/depositos' },
  { label: 'Seguros', url: '/seguros', items: SEGUROS_SUBMENU_MOBILE },
  { label: 'Mis Solicitudes', url: '/mis-solicitudes', items: MIS_SOLICITUDES_SUBMENU_MOBILE },
  { label: 'Blog', url: '/blog' },
];