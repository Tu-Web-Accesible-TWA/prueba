import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonHeader } from './botton-header';

describe('BottonHeader', () => {
  let component: BottonHeader;
  let fixture: ComponentFixture<BottonHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(BottonHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
