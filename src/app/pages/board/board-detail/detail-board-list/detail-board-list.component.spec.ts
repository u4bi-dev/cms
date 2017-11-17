import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardListComponent } from './detail-board-list.component';

describe('DetailBoardListComponent', () => {
  let component: DetailBoardListComponent;
  let fixture: ComponentFixture<DetailBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
