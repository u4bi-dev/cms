import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTapBoardComponent } from './main-tap-board.component';

describe('MainTapBoardComponent', () => {
  let component: MainTapBoardComponent;
  let fixture: ComponentFixture<MainTapBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTapBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTapBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
