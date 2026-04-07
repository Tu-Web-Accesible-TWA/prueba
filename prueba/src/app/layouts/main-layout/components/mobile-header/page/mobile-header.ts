import { Component, inject, signal } from '@angular/core';
import { SubMenuMobile } from '../sub-menu-mobile/sub-menu-mobile';
import { RouterLink } from '@angular/router';
import { MenuMobileService } from '../../../../../core/services/menu-mobile/menu-mobile';

@Component({
  selector: 'app-mobile-header',
  imports: [SubMenuMobile, RouterLink],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {
  private menuMobileService = inject(MenuMobileService);

  isMenuOpen = signal(false);
  isParaTiOpen = signal(false);

  paraTiData = this.menuMobileService.paraTiDataMobile;
  menuData = this.menuMobileService.mainMenuDataMobile;

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