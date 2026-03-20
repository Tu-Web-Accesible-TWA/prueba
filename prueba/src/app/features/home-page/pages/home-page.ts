import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card1 } from '../../../shared/ui/card1/card1';
import { Details } from '../../../shared/ui/details/details';
import { Carrousel } from '../components/carrousel/carrousel';
import { ContainerBox } from '../components/container-box/container-box';

@Component({
  selector: 'app-home-page',
  imports: [Card1, Details, Carrousel, ContainerBox],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
