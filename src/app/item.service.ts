import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item';

export const HACKERNEWS_API_URL = 'https://hacker-news.firebaseio.com/v0';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public http: HttpClient) {
  }

  getItems(ids: number[]): Observable<any> {
    const items$ = ids.map(id => this.getItem(id));
    return forkJoin(items$);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${HACKERNEWS_API_URL}/item/${id}.json`);
  }

  getAllKidsForItems<T extends Item>(children: T[]): T[] {
    children.map(async child => {
      await this.travsereItemKids(child);
    });

    return children;
  }

  async getKidsForItem<T extends Item>(item: T): Promise<T> {
    await this.travsereItemKids(item);
    return item;
  }

  async travsereItemKids<T extends Item>(item: T): Promise<void> {
    if (item.kids) {
      item.children = await Promise.all(item.kids.map(id => this.getItem(id).toPromise()));
      await this.getAllKidsForItems(item.children);
    }
  }
}
