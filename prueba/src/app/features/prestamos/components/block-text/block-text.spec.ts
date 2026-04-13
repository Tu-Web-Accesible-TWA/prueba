import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockText } from './block-text';

describe('BlockText', () => {
  let component: BlockText;
  let fixture: ComponentFixture<BlockText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockText],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
