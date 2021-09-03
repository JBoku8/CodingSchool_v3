import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle } from '../shared/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getTopHeadlineArticles().subscribe((response) => {
      this.articles = response.articles;
    });
  }
}
