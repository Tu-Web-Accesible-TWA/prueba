import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBottonText } from './image-botton-text';

describe('ImageBottonText', () => {
  let component: ImageBottonText;
  let fixture: ComponentFixture<ImageBottonText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBottonText],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBottonText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
