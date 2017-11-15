import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBoardListComponent } from './shared-board-list.component';

describe('SharedBoardListComponent', () => {
  let component: SharedBoardListComponent;
  let fixture: ComponentFixture<SharedBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
