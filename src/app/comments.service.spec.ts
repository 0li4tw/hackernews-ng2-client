import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { COMMENTS } from '../../test-data/comments';
import { ItemService } from './item.service';

fdescribe('CommentsService', () => {

  let commentsService: CommentsService;
  let itemServiceSpy: any;

  beforeEach(() => {
    itemServiceSpy = jasmine.createSpyObj('ItemService', ['getItems']);

    TestBed.configureTestingModule({
      providers: [
        CommentsService,
        {provide: ItemService, useValue: itemServiceSpy}
      ]
    });

    commentsService = TestBed.get(CommentsService);

  });

  it('should be created', () => {
    expect(commentsService).toBeTruthy();
  });

  it('should load comments for a story', () => {
    pending();
  });
});
