import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const HACKERNEWS_API_URL = 'https://hacker-news.firebaseio.com/v0';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public http: HttpClient) {
  }

  getItems(ids: number[]): Observable<any> {
    const items$ = ids.map(id => {
      return this.getItem(id);
    });

    return forkJoin(items$);
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${HACKERNEWS_API_URL}/item/${id}.json`);
  }

}
