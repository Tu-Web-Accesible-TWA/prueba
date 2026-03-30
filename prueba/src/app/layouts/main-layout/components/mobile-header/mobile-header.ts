import { Component, inject, signal } from '@angular/core';
import { SubMenuMobile } from './sub-menu-mobile/sub-menu-mobile';
import { MenuService } from '../../../../core/services/menu/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  imports: [SubMenuMobile, RouterLink],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {
  private menuService = inject(MenuService);

  isMenuOpen = signal(false);
  isParaTiOpen = signal(false);

  paraTiData = this.menuService.paraTiDataMobile;
  menuData = this.menuService.mainMenuDataMobile;

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