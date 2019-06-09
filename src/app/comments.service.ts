import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ItemService } from './item.service';
import { Story } from './models/story';
import { Comment } from './models/comment';
import * as _ from 'lodash';

@Injectable()
export class CommentsService {

  private commentsSubject: BehaviorSubject<Comment[]> = new BehaviorSubject([]);
  public comments$ = this.commentsSubject.asObservable();
  private loadingSubject: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private itemService: ItemService) {
  }

  async loadComments(story: Story): Promise<void> {
    this.startLoading();
    story = _.cloneDeep(story);

    try {
      const comments = await this.getComments(story);
      this.commentsSubject.next(comments);
    } catch (err) {
      console.error(err);
      this.commentsSubject.next([]);
    }
    this.endLoading();
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
    const comments = await Promise.all(ids.map((id: number) => this.getComment(id).toPromise()));
    return comments.filter((child: any) => child !== null && child.deleted !== true);
  }

  private getComment(id: number): Observable<Comment> {
    return this.itemService.getItem(id);
  }

  private startLoading() {
    this.loadingSubject.next(true);
  }

  private endLoading() {
    this.loadingSubject.next(false);
  }
}
