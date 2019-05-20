import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../models/story';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {

  @Input() story: Story;

  constructor() {
  }

  ngOnInit() {
  }

}
