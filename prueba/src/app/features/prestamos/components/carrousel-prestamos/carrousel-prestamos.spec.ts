import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPrestamos } from './carrousel-prestamos';

describe('CarrouselPrestamos', () => {
  let component: CarrouselPrestamos;
  let fixture: ComponentFixture<CarrouselPrestamos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselPrestamos],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrouselPrestamos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
