import { Component, HostListener, signal } from '@angular/core';
import { SubMenu } from '../sub-menu/sub-menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botton-header',
  imports: [SubMenu, RouterLink],
  templateUrl: './botton-header.html',
  styleUrl: './botton-header.css',
})
export class BottonHeader {
  menuActivo = signal<string | null>(null);
  private timeoutId!: ReturnType<typeof setTimeout>;
  fixed = false;

  dataPrestamos: SubmenuData = {
    title: 'Préstamos',
    imageUrl: '/img/prestamos.jpg',
    buttonText: 'Conoce los préstamos Cetelem',
    buttonUrl: '/prestamos',
    items: [
      { label: 'Coche', url: '/prestamos/prestamo-coche', iconClass: 'fa-solid fa-car' },
      { label: 'Reforma y hogar', url: '/prestamos/prestamo-reforma', iconClass: 'fa-solid fa-house' }
    ]
  };

  dataCuentas: SubmenuData = {
    title: 'Cuentas',
    imageUrl: 'img/cuentas.png',
    buttonText: 'Conoce las cuentas Cetelem',
    buttonUrl: '/cuentas',
    items: [
      { label: 'Cuenta Suma', url: '/cuentas/suma', iconClass: 'fa-solid fa-wallet' },
      { label: 'Cuenta Ahorro', url: '/cuentas/ahorro', iconClass: 'fa-solid fa-piggy-bank' },
      { label: 'Cuenta de Pago Básica', url: '/cuentas/pago-basic', iconClass: 'fa-solid fa-heart' }
    ]
  };

  dataSeguros: SubmenuData = {
    title: 'Seguros',
    imageUrl: 'img/seguros.jpg',
    buttonText: 'Conoce los seguros de Cetelem',
    buttonUrl: '/seguros',
    items: [
      { label: 'Enfermedades Graves', url: '/seguros/enf', iconClass: 'fa-regular fa-hospital' },
      { label: 'Ciberseguro Tarjetas', url: '/seguros/ciber', iconClass: 'fa-solid fa-display' },
      { label: 'Senior', url: '/seguros/senior', iconClass: 'fa-solid fa-person-cane' }
    ]
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Definimos a partir de cuántos píxeles se activa (ej: la altura del top-header)
    // Si el top-header mide 100px, ponemos 100.
    const threshold = 100; 
    
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.fixed = scrollOffset > threshold;
  }


  abrirMenu(menu: string) {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    
    this.menuActivo.set(menu);
  }

  cerrarMenu() {
    this.timeoutId = setTimeout(() => {
      this.menuActivo.set(null);
    }, 150);
  }
}

export interface SubmenuItem {
  label: string;
  url: string;
  iconClass: string;
}

export interface SubmenuData {
  title: string;
  imageUrl: string;
  items: SubmenuItem[];
  buttonText: string;
  buttonUrl: string;
}
