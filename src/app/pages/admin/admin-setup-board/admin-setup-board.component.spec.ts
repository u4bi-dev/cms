import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetupBoardComponent } from './admin-setup-board.component';

describe('AdminSetupBoardComponent', () => {
  let component: AdminSetupBoardComponent;
  let fixture: ComponentFixture<AdminSetupBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSetupBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSetupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
