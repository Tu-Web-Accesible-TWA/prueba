import { Component, inject } from '@angular/core';
import { PrincipalHeader } from '../../components/headers/principal-header/principal-header';
import { RouterOutlet } from '@angular/router';
import { PrincipalFooter } from '../../components/footers/principal-footer/principal-footer';
import { Responsive } from '../../services/responsive/responsive';

@Component({
  selector: 'app-main-layout',
  imports: [PrincipalHeader, RouterOutlet, PrincipalFooter],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  responsive = inject(Responsive);
}
