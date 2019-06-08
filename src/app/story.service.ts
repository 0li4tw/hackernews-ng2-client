import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Story } from './models/story';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { HACKERNEWS_API_URL, ItemService } from './item.service';
import { StoryPage } from './models/story-page';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private static readonly PAGE_SIZE = 9;
  private page = 1;
  private topStoriesSubject: BehaviorSubject<StoryPage> = new BehaviorSubject(undefined);
  public topStories$ = this.topStoriesSubject.asObservable();

  constructor(public http: HttpClient, private itemService: ItemService) {
    this.getTopStories();
    this.topStoriesSubject.next({stories: [], page: this.page});
  }

  private get topStoryIds$(): Observable<any> {
    return this.http.get(`${HACKERNEWS_API_URL}/topstories.json`).pipe(shareReplay());
  }

  private getTopStories(): Observable<any> {
    const offset = (this.page - 1) * StoryService.PAGE_SIZE;
    const limit = offset + StoryService.PAGE_SIZE;

    return this.topStoryIds$.pipe(
      switchMap((ids: number[]) => {
        ids = ids.slice(offset, limit);
        return this.itemService.getItems(ids);
      }),
      tap((stories: Story[]) => {
        this.topStoriesSubject.next({stories, page: this.page});
      })
    );
  }

  nextPage() {
    this.page++;
    return this.getTopStories();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }

    return this.getTopStories();
  }

  loadFirstPage() {
    return this.getTopStories();
  }

  cloneStories(): Story[] {
    return _.cloneDeep(this.topStoriesSubject.getValue().stories);
  }
}
