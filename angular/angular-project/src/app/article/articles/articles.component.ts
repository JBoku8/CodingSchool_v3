import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle, IArticleCategory } from '../shared/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  categories: IArticleCategory[] = [];
  query: URLSearchParams = new URLSearchParams('pageSize=12&category=technology');

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.categories =
      'business entertainment general health science sports technology'
        .split(' ')
        .map(
          (c): IArticleCategory => ({
            name: c,
          })
        );

    this.fetchArticles();
  }

  private fetchArticles(): void {
    this.articleService.getTopHeadlineArticles(this.query).subscribe((response) => {
      this.articles = response.articles;
    });
  }

  onChange(event: any) {
    if (event.target.value) {
      this.query.set(event.target.name, event.target.value);
      this.fetchArticles();
    } else {
      // Reset
    }
  }

  onSubmit() {}
}
