import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../shared/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() item: IArticle | null = null;

  constructor() {}

  ngOnInit(): void {}
}
