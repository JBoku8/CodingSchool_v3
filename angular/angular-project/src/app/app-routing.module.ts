import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './auth/auth.guard';
import { SingleTodoComponent } from './todo/single-todo/single-todo.component';
import { TodoResolver } from './todo/todo.resolver';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'sign-in',
    component: LoginFormComponent,
  },
  {
    path: 'sign-up',
    component: RegisterFormComponent,
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [AuthGuard],
    resolve: {
      resolvedTodoList: TodoResolver,
    },
  },
  {
    path: 'todo/:todoId',
    component: SingleTodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
