import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUpText } from './image-up-text';

describe('ImageUpText', () => {
  let component: ImageUpText;
  let fixture: ComponentFixture<ImageUpText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUpText],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUpText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
