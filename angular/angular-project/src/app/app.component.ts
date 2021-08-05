import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = 'My Hello World App.';
  message = 'My custom message.';
  showMessage = false;
  count = 0;

  getName() {
    return 'Angular 12.0 Rocks.';
  }

  onClick() {
    this.showMessage = !this.showMessage;
  }

  onAdd() {
    this.count += 1;
  }

  onReset() {
    this.count = 0;
  }

  onMinus() {
    this.count -= 1;
  }
}
