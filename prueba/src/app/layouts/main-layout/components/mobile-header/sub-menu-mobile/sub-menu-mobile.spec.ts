import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuMobile } from './sub-menu-mobile';

describe('SubMenuMobile', () => {
  let component: SubMenuMobile;
  let fixture: ComponentFixture<SubMenuMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMenuMobile],
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenuMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
