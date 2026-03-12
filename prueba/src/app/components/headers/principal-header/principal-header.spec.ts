import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHeader } from './principal-header';

describe('PrincipalHeader', () => {
  let component: PrincipalHeader;
  let fixture: ComponentFixture<PrincipalHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
