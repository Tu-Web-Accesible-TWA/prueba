import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card1 } from '../blog/components/card1/card1';
import { Details } from '../../shared/ui/details/details';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Card1, Details],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
