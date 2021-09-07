import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [ArticlesComponent, SingleArticleComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'articles',
        component: ArticlesComponent,
      },
      {
        path: 'articles/:title',
        component: SingleArticleComponent,
      },
    ]),
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
})
export class ArticleModule {}
