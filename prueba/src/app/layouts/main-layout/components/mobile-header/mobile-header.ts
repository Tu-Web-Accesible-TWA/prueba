import { Component, signal } from '@angular/core';
import { SubMenuMobile } from './sub-menu-mobile/sub-menu-mobile';

@Component({
  selector: 'app-mobile-header',
  imports: [SubMenuMobile],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {
  isMenuOpen = signal(false);
  isParaTiOpen = signal(false);

  // Datos del menú
  paraTiData = signal<MenuItem[]>([
    { label: 'Para ti', url: '/para-ti' },
    { label: 'Comercios', url: '/comercios' },
    { label: 'Concesionarios', url: '/concesionarios' },
    { label: 'eCommerce', url: '/ecommerce' },
  ]);

  private prestamoData: MenuItem[] = [
    { label: 'Coche', url: '/prestamos/coche', iconClass: 'fa-solid fa-car' },
    { label: 'Reforma y hogar', url: '/prestamos/reforma', iconClass: 'fa-solid fa-house' },
    { label: 'Salud', url: '/prestamos/salud', iconClass: 'fa-solid fa-stethoscope' },
  ];

  private cuentasData: MenuItem[] = [
    { label: 'Cuenta', url: '/cuentas', iconClass: 'fa-solid fa-building-columns' },
    { label: 'Cuenta Suma', url: '/cuentas/suma', iconClass: 'fa-solid fa-wallet' },
    { label: 'Cuenta Ahorro', url: '/cuentas/ahorro', iconClass: 'fa-solid fa-piggy-bank' },
    { label: 'Cuenta de Pago Básica', url: '/cuentas/pago-basic', iconClass: 'fa-solid fa-heart' }
  ];

  menuData = signal<MenuItem[]>([
    { label: 'Préstamos', url: '/prestamos', items: this.prestamoData },
    { label: 'Tarjetas', url: '/tarjeta' },
    { label: 'Cuentas', url: '/concesionarios', items: this.cuentasData },
    { label: 'eCommerce', url: '/ecommerce' },
  ]);

  toggleMenu() {
    this.isMenuOpen.update(state => !state);
  }

  toggleParaTi() {
    this.isParaTiOpen.update(state => !state);
  }

  handleMenuClose() {
    this.isMenuOpen.set(false);
  }

  handleParaTiClose() {
    this.isParaTiOpen.set(false);
  }
}

export interface MenuItem {
  label: string;
  url?: string;
  iconClass?: string;
  items?: MenuItem[]; // Estructura recursiva
}