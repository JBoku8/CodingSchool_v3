import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { AppRoutingModule } from './app-routing.module';
import { ExponentialStrengthPipe } from './pipes/exponential-Strength';
import { CounterComponent } from './counter/counter.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCardComponent } from './todo/todo-card/todo-card.component';
import { LogResponseInterceptor } from './common/log-response.interceptor';
import { AddAuthTokenInterceptor } from './common/add-auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    ExponentialStrengthPipe,
    CounterComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    TodoComponent,
    TodoCardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
