import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Observable } from 'rxjs';
import { Story } from '../models/story';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  topStories$: Observable<Story[]>;

  constructor(public storyService: StoryService) {
  }

  ngOnInit() {
    this.topStories$ = this.storyService.topStories$;
  }

  loadComments(id: number) {
    this.storyService.getStoryComments(id);
  }
}
