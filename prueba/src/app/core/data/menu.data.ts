import { SubMenuData } from "../models/menu.model";
import { SubMenuItem } from "../models/menu.model";

//Items
const PRESTAMOS_ITEMS: SubMenuItem[] = [
  { label: 'Coche', url: '/prestamos/prestamo-coche', iconClass: 'fa-solid fa-car' },
  { label: 'Reforma y hogar', url: '/prestamos/prestamo-reforma', iconClass: 'fa-solid fa-house' }
];

const CUENTAS_ITEMS: SubMenuItem[] = [
  { label: 'Cuenta Suma', url: '/cuentas/suma', iconClass: 'fa-solid fa-wallet' },
  { label: 'Cuenta Ahorro', url: '/cuentas/ahorro', iconClass: 'fa-solid fa-piggy-bank' },
  { label: 'Cuenta de Pago Básica', url: '/cuentas/pago-basic', iconClass: 'fa-solid fa-heart' }
];

const SEGUROS_ITEMS: SubMenuItem[] = [
  { label: 'Enfermedades Graves', url: '/seguros/enf-gra', iconClass: 'fa-regular fa-hospital' },
  { label: 'Ciberseguro Tarjetas', url: '/seguros/ciber-tar', iconClass: 'fa-solid fa-display' },
  { label: 'Senior', url: '/seguros/senior', iconClass: 'fa-solid fa-person-cane' }
];

const MIS_SOLICITUDES_ITEMS: SubMenuItem[] = [
  { label: 'Seguimiento de Solicitud', url: '/seguros/enf-gra', iconClass: 'fa-solid fa-clipboard-list' },
  { label: 'Preguntas Frecuentes', url: '/seguros/ciber-tar', iconClass: 'fa-regular fa-circle-question' }
];


//Sub Menus
export const PRESTAMOS_SUBMENU: SubMenuData = {
    title: 'Préstamos',
    imageUrl: '/img/prestamos.jpg',
    buttonText: 'Conoce los préstamos Cetelem',
    buttonUrl: '/prestamos',
    items: PRESTAMOS_ITEMS
  };

export const CUENTAS_SUBMENU: SubMenuData = {
    title: 'Cuentas',
    imageUrl: 'img/cuentas.png',
    buttonText: 'Conoce las cuentas Cetelem',
    buttonUrl: '/cuentas',
    items: CUENTAS_ITEMS
  };

export const SEGUROS_SUBMENU: SubMenuData = {
    title: 'Seguros',
    imageUrl: 'img/seguros.jpg',
    buttonText: 'Conoce los seguros de Cetelem',
    buttonUrl: '/seguros',
    items: SEGUROS_ITEMS
  };

export const MIS_SOLICITUDES_SUBMENU: SubMenuData = {
    title: 'Mis Solicitudes',
    imageUrl: 'img/seguros.jpg',
    buttonText: 'Mis solicitudes con Cetelem',
    buttonUrl: '/mis-solicitudes',
    items: MIS_SOLICITUDES_ITEMS
  };

export const BLOG_SUBMENU: SubMenuData = {
    title: 'Blog',
    imageUrl: 'img/seguros.jpg',
    buttonText: 'Aprende todo sobre créditos',
    buttonUrl: '/credito-zoom',
    items: []
  };