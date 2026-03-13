import { Component } from '@angular/core';
import { TopHeader } from './top-header/top-header';
import { BottonHeader } from './botton-header/botton-header';

@Component({
  selector: 'app-principal-header',
  imports: [TopHeader, BottonHeader],
  templateUrl: './principal-header.html',
  styleUrl: './principal-header.css',
})
export class PrincipalHeader {}
