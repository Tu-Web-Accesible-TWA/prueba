import { Injectable, signal } from '@angular/core';
import { SubMenuData } from '../../models/menu.model';
import { CUENTAS_SUBMENU, MIS_SOLICITUDES_SUBMENU, PRESTAMOS_SUBMENU, SEGUROS_SUBMENU } from '../../data/menu.data';


@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _prestamoSubMenu = signal<SubMenuData>(PRESTAMOS_SUBMENU);
  private _cuentaSubMenu = signal<SubMenuData>(CUENTAS_SUBMENU);
  private _seguroSubMenu = signal<SubMenuData>(SEGUROS_SUBMENU);
  private _misSolicitudesSubMenu = signal<SubMenuData>(MIS_SOLICITUDES_SUBMENU);

  prestamoSubMenu = this._prestamoSubMenu.asReadonly();
  cuentaSubMenu = this._cuentaSubMenu.asReadonly();
  seguroSubMenu = this._seguroSubMenu.asReadonly();
  misSolicitudesSubMenu = this._misSolicitudesSubMenu.asReadonly();
}
