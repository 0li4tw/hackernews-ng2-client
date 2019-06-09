import { TestBed } from '@angular/core/testing';
import { HACKERNEWS_API_URL, ItemService } from './item.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { findStoryById, STORIES } from '../../test-data/stories';
import { of } from 'rxjs';

describe('ItemService', () => {

  let itemService: ItemService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService]
    });

    itemService = TestBed.get(ItemService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(itemService).toBeTruthy();
  });

  it('should return get a single item', () => {
    const itemId = 20137264;

    itemService.getItem(20137264).subscribe(item => {
      expect(item).toBeTruthy('No item returned');
      expect(item.title).toBe('The Open Source Seed Initiative');
    });

    const req = httpTestingController.expectOne(`${HACKERNEWS_API_URL}/item/${itemId}.json`);

    expect(req.request.method).toBe('GET');

    req.flush(STORIES[itemId]);

    httpTestingController.verify();
  });

  it('should return an array of items', () => {
    const itemIds = [20137264, 20138110, 20137550];

    spyOn(itemService, 'getItem').and.returnValues(
      of(findStoryById(20137264)),
      of(findStoryById(20138110)),
      of(findStoryById(20137550))
    );

    itemService.getItems(itemIds).subscribe(items => {
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].title).toBe('The Open Source Seed Initiative');
      expect(items[2].title)
        .toBe('Total cholesterol and all-cause mortality – a study among 13M adults');
    });

    expect(itemService.getItem).toHaveBeenCalledTimes(3);

  });

});
