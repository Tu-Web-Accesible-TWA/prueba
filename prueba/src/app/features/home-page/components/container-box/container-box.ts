import { Component, signal } from '@angular/core';
import { FeatureBox } from '../feature-box/feature-box';
import { NgTemplateOutlet } from '@angular/common';
import { FEATURE_BOX_DATA } from '../../data/feature-box.data';

@Component({
  selector: 'app-container-box',
  imports: [FeatureBox, NgTemplateOutlet],
  templateUrl: './container-box.html',
  styleUrl: './container-box.css',
})
export class ContainerBox {
  readonly featureBoxData = signal(FEATURE_BOX_DATA);
}
