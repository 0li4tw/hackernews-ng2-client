import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Story } from '../../models/story';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent {

  @Input() story: Story;
  @Output() loadComments = new EventEmitter();
  private clicked = false;

  handleClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.loadComments.emit(this.story.id);
    }
  }
}
