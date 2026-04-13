import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCetelem } from './about-cetelem';

describe('AboutCetelem', () => {
  let component: AboutCetelem;
  let fixture: ComponentFixture<AboutCetelem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCetelem],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCetelem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
