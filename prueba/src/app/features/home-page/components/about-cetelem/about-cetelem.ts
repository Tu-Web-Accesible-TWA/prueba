import { Component } from '@angular/core';
import { FEATURES_ABOUT_CETELEM } from '../../data/about-cetelem.data';
import { FeatureCard } from '../../../../shared/ui/feature-card/feature-card';
import { DefaultButton } from '../../../../shared/ui/default-button/default-button';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-about-cetelem',
  imports: [FeatureCard, DefaultButton, NgTemplateOutlet],
  templateUrl: './about-cetelem.html',
  styleUrl: './about-cetelem.css',
})
export class AboutCetelem {
  readonly features = FEATURES_ABOUT_CETELEM; 
}
