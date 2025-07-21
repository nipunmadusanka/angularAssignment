import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTypeList } from './role-type-list';

describe('RoleTypeList', () => {
  let component: RoleTypeList;
  let fixture: ComponentFixture<RoleTypeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleTypeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleTypeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
