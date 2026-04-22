import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {}


export interface BannerRiesgo {
  alertaLiquidez: string;
  nivelRiesgo: number;    // Ejemplo: 1
  escalaRiesgo: number;   // Ejemplo: 6
  textoRiesgo: string;
  informacionLegal: string;
  notaPenalizaciones: string;
}