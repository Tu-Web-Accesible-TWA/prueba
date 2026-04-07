import { TestBed } from '@angular/core/testing';

import { MenuMobileService } from './menu-mobile';

describe('MenuMobile', () => {
  let service: MenuMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
