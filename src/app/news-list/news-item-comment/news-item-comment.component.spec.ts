import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemCommentComponent } from './news-item-comment.component';

describe('NewsItemCommentComponent', () => {
  let component: NewsItemCommentComponent;
  let fixture: ComponentFixture<NewsItemCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
