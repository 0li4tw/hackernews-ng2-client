import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { ItemService } from './item.service';
import { Story } from './models/story';
import { Comment } from './models/comment';
import * as _ from 'lodash';

@Injectable()
export class CommentsService {

  constructor(private itemService: ItemService) {
  }

  private static filterComments(comments: Comment[]): Comment[] {
    return comments.filter((child: any) => child !== null && child.deleted !== true);
  }

  loadComments(story: Story): Observable<Comment[]> {
    story = _.cloneDeep(story);

    try {
      return from(this.getComments(story));
    } catch (err) {
      console.error(err);
      return of([]);
    }
  }

  private async getComments(item: Story | Comment): Promise<Comment[]> {
    if (item.kids) {
      item.comments = await this.kidIdsToComments(item.kids);
      await this.getSubComments(item.comments);
      return item.comments;
    }

    return [];
  }

  private async getSubComments(comments: Comment[]): Promise<Comment[]> {
    for (const comment of comments) {
      comment.comments = await this.getComments(comment);
    }

    return comments;
  }

  private async kidIdsToComments(ids: number[]): Promise<Comment[]> {
    const comments = await this.itemService.getItems(ids).toPromise();
    return CommentsService.filterComments(comments);
  }
}
