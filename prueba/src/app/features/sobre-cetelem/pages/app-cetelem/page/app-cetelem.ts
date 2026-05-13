import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { FeaturesCarousel } from '../components/features-carousel/features-carousel';
import { ExtrasSection } from '../components/extras-section/extras-section';

@Component({
  selector: 'app-cetelem',
  imports: [Hero, Breadcrumbs, FeaturesCarousel, ExtrasSection],
  templateUrl: './app-cetelem.html',
  styleUrl: './app-cetelem.css',
})
export class AppCetelem {}
