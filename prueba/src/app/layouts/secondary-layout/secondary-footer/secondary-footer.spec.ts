import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFooter } from './secondary-footer';

describe('SecondaryFooter', () => {
  let component: SecondaryFooter;
  let fixture: ComponentFixture<SecondaryFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
