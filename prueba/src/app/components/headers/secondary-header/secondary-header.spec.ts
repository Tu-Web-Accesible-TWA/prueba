import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHeader } from './secondary-header';

describe('SecondaryHeader', () => {
  let component: SecondaryHeader;
  let fixture: ComponentFixture<SecondaryHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
