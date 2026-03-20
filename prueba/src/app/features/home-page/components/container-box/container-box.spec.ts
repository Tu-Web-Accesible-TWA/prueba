import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBox } from './container-box';

describe('ContainerBox', () => {
  let component: ContainerBox;
  let fixture: ComponentFixture<ContainerBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerBox],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
