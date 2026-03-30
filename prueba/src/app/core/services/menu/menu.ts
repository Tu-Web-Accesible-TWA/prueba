import { Injectable, signal } from '@angular/core';
import { MenuMobileItem } from '../../models/menu.model';
import { MAIN_MENU_DATA_MOBILE, PARA_TI_DATA_MOBILE } from '../../data/menu.data';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // Usamos signals para que el estado sea reactivo en toda la app
  private _paraTiDataMobile = signal<MenuMobileItem[]>(PARA_TI_DATA_MOBILE);
  private _mainMenuDataMobile = signal<MenuMobileItem[]>(MAIN_MENU_DATA_MOBILE);

  // Exponemos como Readonly para que los componentes no lo modifiquen accidentalmente
  paraTiDataMobile = this._paraTiDataMobile.asReadonly();
  mainMenuDataMobile = this._mainMenuDataMobile.asReadonly();
}
