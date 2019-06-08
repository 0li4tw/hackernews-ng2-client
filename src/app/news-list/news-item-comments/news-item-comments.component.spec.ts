import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemCommentsComponent } from './news-item-comments.component';

describe('NewsItemCommentsComponent', () => {
  let component: NewsItemCommentsComponent;
  let fixture: ComponentFixture<NewsItemCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
