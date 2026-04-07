import { Injectable, signal } from '@angular/core';
import { MenuMobileItem } from '../../models/menu-mobile.model';
import { MAIN_MENU_DATA_MOBILE, PARA_TI_DATA_MOBILE } from '../../data/menu-mobile.data';

@Injectable({
  providedIn: 'root',
})
export class MenuMobileService {
  // Uso de signals para que el estado sea reactivo en toda la app
  private _paraTiDataMobile = signal<MenuMobileItem[]>(PARA_TI_DATA_MOBILE);
  private _mainMenuDataMobile = signal<MenuMobileItem[]>(MAIN_MENU_DATA_MOBILE);

  // Se ponen Readonly para que los componentes no lo modifiquen accidentalmente
  paraTiDataMobile = this._paraTiDataMobile.asReadonly();
  mainMenuDataMobile = this._mainMenuDataMobile.asReadonly();
}
