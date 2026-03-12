import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card1 } from '../../components/cards/card1/card1';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Card1],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
