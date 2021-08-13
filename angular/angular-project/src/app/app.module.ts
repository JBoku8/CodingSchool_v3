import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { ExponentialStrengthPipe } from './pipes/exponential-Strength';
import { CounterComponent } from './counter/counter.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    ExponentialStrengthPipe,
    CounterComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
