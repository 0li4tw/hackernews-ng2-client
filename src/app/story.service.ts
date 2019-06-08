import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Story } from './models/story';
import { switchMap } from 'rxjs/operators';
import { HACKERNEWS_API_URL, ItemService } from './item.service';

const STORIES_PER_PAGE = 30;

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private topStoriesSubject: BehaviorSubject<Story[]> = new BehaviorSubject(null);
  public topStories$ = this.topStoriesSubject.asObservable();

  constructor(public http: HttpClient, private itemService: ItemService) {
    this.getTopStories();
  }


  private getTopStories(page: number = 1): void {
    const offset = (page - 1) * STORIES_PER_PAGE;
    const limit = offset + STORIES_PER_PAGE;

    this.http.get(`${HACKERNEWS_API_URL}/topstories.json`)
      .pipe(
        switchMap((ids: number[]) => {
          ids = ids.slice(offset, limit);
          return this.itemService.getItems(ids);
        })
      )
      .subscribe((stories: Story[]) => {
        this.topStoriesSubject.next(stories);
      });
  }

  async getStoryComments(id: number): Promise<void> {
    const story = this.topStoriesSubject.value.find(item => item.id === id);
    await this.itemService.getKidsForItem(story);
    this.topStoriesSubject.next(this.topStoriesSubject.value);
  }
}
