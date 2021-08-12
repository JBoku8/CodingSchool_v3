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
  counterStartValue: number = 10;
  numbers = [10];

  getName() {
    return 'Angular 12.0 Rocks.';
  }

  onClick() {
    this.showMessage = !this.showMessage;
  }

  counterChangeHandler(newValue: number) {
    if (newValue > 10) {
      this.showMessage = false;
    } else {
      this.showMessage = true;
    }
    this.numbers.push(newValue);
  }

  getNumberClasses = (item: number) => ({
    'list-group-item-success': item <= 3,
    'list-group-item-danger': item === 4,
    'list-group-item-primary': item > 4,
  });
}
