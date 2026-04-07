import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuMobileItem } from '../../../../../core/models/menu-mobile.model';

@Component({
  selector: 'app-sub-menu-mobile',
  standalone: true,
  imports: [RouterLink, SubMenuMobile],
  templateUrl: './sub-menu-mobile.html',
  styleUrl: './sub-menu-mobile.css',
})
export class SubMenuMobile {
  items = input.required<MenuMobileItem[]>();
  isVisible = input<boolean>(false);
  isRoot = input<boolean>(false); // Para saber si mostrar el botón X o Volver

  // Outputs
  closeMenu = output<void>(); // Cierra todo el menú
  goBack = output<void>();    // Solo cierra el nivel actual

  // Estado del submenú activo
  activeChildIndex = signal<number | null>(null);

  toggleChild(index: number | null) {
    this.activeChildIndex.set(index);
  }

  handleClose() {
    this.activeChildIndex.set(null);
    this.closeMenu.emit();
  }
}
