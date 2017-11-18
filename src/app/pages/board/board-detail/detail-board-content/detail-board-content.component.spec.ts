import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardContentComponent } from './detail-board-content.component';

describe('DetailBoardContentComponent', () => {
  let component: DetailBoardContentComponent;
  let fixture: ComponentFixture<DetailBoardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
