import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardCommentComponent } from './detail-board-comment.component';

describe('DetailBoardCommentComponent', () => {
  let component: DetailBoardCommentComponent;
  let fixture: ComponentFixture<DetailBoardCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoardCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
