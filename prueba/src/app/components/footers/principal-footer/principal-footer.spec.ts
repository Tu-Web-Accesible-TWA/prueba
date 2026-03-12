import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalFooter } from './principal-footer';

describe('PrincipalFooter', () => {
  let component: PrincipalFooter;
  let fixture: ComponentFixture<PrincipalFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
