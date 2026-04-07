import { Component } from '@angular/core';
import { FeatureCard } from '../../../shared/ui/feature-card/feature-card';
import { Details } from '../../../shared/ui/details/details';
import { Carrousel } from '../components/carrousel/carrousel';
import { ContainerBox } from '../components/container-box/container-box';
import { DefaultButton } from '../../../shared/ui/default-button/default-button';

@Component({
  selector: 'app-home-page',
  imports: [FeatureCard, Details, Carrousel, ContainerBox, DefaultButton],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
