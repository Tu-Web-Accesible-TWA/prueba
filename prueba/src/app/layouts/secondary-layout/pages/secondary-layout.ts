import { Component } from '@angular/core';
import { SecondaryHeader } from '../secondary-header/secondary-header';
import { RouterOutlet } from '@angular/router';
import { SecondaryFooter } from '../secondary-footer/secondary-footer';

@Component({
  selector: 'app-secondary-layout',
  imports: [SecondaryHeader, RouterOutlet, SecondaryFooter],
  templateUrl: './secondary-layout.html',
  styleUrl: './secondary-layout.css',
})
export class SecondaryLayout {}
