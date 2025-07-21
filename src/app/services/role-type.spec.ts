import { TestBed } from '@angular/core/testing';

import { RoleType } from './role-type';

describe('RoleType', () => {
  let service: RoleType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
