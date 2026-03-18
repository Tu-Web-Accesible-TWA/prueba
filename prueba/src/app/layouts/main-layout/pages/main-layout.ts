import { Component, inject } from '@angular/core';
import { PrincipalHeader } from '../components/principal-header/principal-header';
import { RouterOutlet } from '@angular/router';
import { PrincipalFooter } from '../components/principal-footer/principal-footer';
import { Responsive } from '../../../core/services/responsive/responsive';

@Component({
  selector: 'app-main-layout',
  imports: [PrincipalHeader, RouterOutlet, PrincipalFooter],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  responsive = inject(Responsive);
}
