import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsApiResponse } from './shared/article';
import { NEWS_API_URL } from 'src/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getTopHeadlineArticles(): Observable<INewsApiResponse> {
    return this.http.get<INewsApiResponse>(
      `${NEWS_API_URL}/top-headlines?pageSize=12&category=technology`
    );
  }

  getSingleArticle(titleString: string): Observable<INewsApiResponse> {
    return this.http.get<INewsApiResponse>(
      `${NEWS_API_URL}/top-headlines?q=${titleString}`
    );
  }
}
