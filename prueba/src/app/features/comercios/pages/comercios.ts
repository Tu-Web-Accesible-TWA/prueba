import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { FeaturesGrid } from '../components/features-grid/features-grid';
import { InfoCards } from '../components/info-cards/info-cards';
import { AdvantagesBanner } from '../components/advantages-banner/advantages-banner';
import { TrustSection } from '../components/trust-section/trust-section';

@Component({
  selector: 'app-comercios',
  imports: [
    Hero,
    Breadcrumbs,
    FeaturesGrid,
    InfoCards,
    AdvantagesBanner,
    TrustSection,
  ],
  templateUrl: './comercios.html',
  styleUrl: './comercios.css',
})
export class Comercios {}
