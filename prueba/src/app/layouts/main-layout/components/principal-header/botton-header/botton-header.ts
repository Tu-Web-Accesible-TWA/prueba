import { Component, signal } from '@angular/core';
import { SubMenu } from '../sub-menu/sub-menu';

@Component({
  selector: 'app-botton-header',
  imports: [SubMenu],
  templateUrl: './botton-header.html',
  styleUrl: './botton-header.css',
})
export class BottonHeader {
  menuActivo = signal<string | null>(null);
  private timeoutId!: ReturnType<typeof setTimeout>;

  dataPrestamos: SubmenuData = {
    title: 'Préstamos',
    imageUrl: '/img/prestamos.jpg',
    buttonText: 'Conoce los préstamos Cetelem',
    buttonUrl: '/prestamos',
    items: [
      { label: 'Coche', url: '/prestamos/coche', iconClass: 'icon-car' },
      { label: 'Reforma y hogar', url: '/prestamos/reforma', iconClass: 'icon-home' }
    ]
  };

  dataCuentas: SubmenuData = {
    title: 'Cuentas',
    imageUrl: 'img/cuentas.png',
    buttonText: 'Conoce las cuentas Cetelem',
    buttonUrl: '/cuentas',
    items: [
      { label: 'Cuenta Suma', url: '/cuentas/suma', iconClass: 'icon-wallet' },
      { label: 'Cuenta Ahorro', url: '/cuentas/ahorro', iconClass: 'icon-pig' },
      { label: 'Cuenta de Pago Básica', url: '/cuentas/pago-basic', iconClass: 'icon-heart' }
    ]
  };

  dataSeguros: SubmenuData = {
    title: 'Seguros',
    imageUrl: 'img/seguros.jpg',
    buttonText: 'Conoce los seguros de Cetelem',
    buttonUrl: '/seguros',
    items: [
      { label: 'Enfermedades Graves', url: '/seguros/enf', iconClass: 'icon-hospital' },
      { label: 'Ciberseguro Tarjetas', url: '/seguros/ciber', iconClass: 'icon-screen' },
      { label: 'Senior', url: '/seguros/senior', iconClass: 'icon-cane' }
    ]
  };


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
