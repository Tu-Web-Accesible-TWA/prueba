import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBox } from './feature-box';

describe('FeatureBox', () => {
  let component: FeatureBox;
  let fixture: ComponentFixture<FeatureBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBox],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
