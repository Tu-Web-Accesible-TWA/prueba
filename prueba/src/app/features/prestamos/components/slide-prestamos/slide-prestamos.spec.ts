import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePrestamos } from './slide-prestamos';

describe('SlidePrestamos', () => {
  let component: SlidePrestamos;
  let fixture: ComponentFixture<SlidePrestamos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePrestamos],
    }).compileComponents();

    fixture = TestBed.createComponent(SlidePrestamos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
