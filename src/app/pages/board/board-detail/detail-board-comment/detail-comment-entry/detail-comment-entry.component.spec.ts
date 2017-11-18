import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommentEntryComponent } from './detail-comment-entry.component';

describe('DetailCommentEntryComponent', () => {
  let component: DetailCommentEntryComponent;
  let fixture: ComponentFixture<DetailCommentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
