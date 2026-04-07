import { Component, HostListener, inject, signal } from '@angular/core';
import { SubMenu } from '../sub-menu/sub-menu';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../../../core/services/menu/menu';

@Component({
  selector: 'app-botton-header',
  imports: [SubMenu, RouterLink],
  templateUrl: './botton-header.html',
  styleUrl: './botton-header.css',
})
export class BottonHeader {
  private menuService = inject(MenuService);
  menuActivo = signal<string | null>(null);
  private timeoutId!: ReturnType<typeof setTimeout>;
  fixed = false;

  dataPrestamos = this.menuService.prestamoSubMenu;
  dataCuentas = this.menuService.cuentaSubMenu;
  dataSeguros = this.menuService.seguroSubMenu;
  dataMisSolicitudes = this.menuService.misSolicitudesSubMenu;

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
