import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  topStories$: Observable<Story[]>;
  page$: Observable<number>;

  constructor(public storyService: StoryService) {
  }

  ngOnInit() {
    this.storyService.loadFirstPage().subscribe();
    this.topStories$ = this.storyService.topStories$.pipe(map(storyPage => storyPage.stories));
    this.page$ = this.storyService.topStories$.pipe(map(storyPage => storyPage.page));
  }

  loadComments(id: number) {
    this.storyService.getStoryComments(id);
  }

  nextPage() {
    this.storyService.nextPage().subscribe();
  }

  previousPage() {
    this.storyService.previousPage().subscribe();
  }
}
