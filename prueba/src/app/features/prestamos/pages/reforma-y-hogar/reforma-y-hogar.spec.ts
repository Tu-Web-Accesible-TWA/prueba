import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformaYHogar } from './reforma-y-hogar';

describe('ReformaYHogar', () => {
  let component: ReformaYHogar;
  let fixture: ComponentFixture<ReformaYHogar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReformaYHogar],
    }).compileComponents();

    fixture = TestBed.createComponent(ReformaYHogar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
