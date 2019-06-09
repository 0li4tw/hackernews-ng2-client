import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../models/story';
import { Comment } from '../../models/comment';
import { CommentsService } from '../../comments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss'],
  providers: [CommentsService]
})
export class NewsListItemComponent {

  @Input() story: Story;
  private clicked = false;
  private comments$: Observable<Comment[]>;
  private loading$: Observable<boolean>;

  constructor(private commentsService: CommentsService) {
  }

  loadComments() {
    if (!this.clicked) {
      this.clicked = true;
      this.comments$ = this.commentsService.loadComments(this.story);
    }
  }
}
