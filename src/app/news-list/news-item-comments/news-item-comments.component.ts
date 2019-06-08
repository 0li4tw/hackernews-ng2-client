import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-news-item-comments',
  templateUrl: './news-item-comments.component.html',
  styleUrls: ['./news-item-comments.component.scss']
})
export class NewsItemCommentsComponent {
  @Input() comments: Comment[];
}
