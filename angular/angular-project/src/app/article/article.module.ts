import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [ArticlesComponent, SingleArticleComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'articles/:title',
        component: SingleArticleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: ArticlesComponent,
        canActivate: [AuthGuard],
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
