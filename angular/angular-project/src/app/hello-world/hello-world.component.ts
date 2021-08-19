import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.scss'],
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  @Input() title = 'Hello Default';
  date = new Date();
  lowerCaseString = 'lower case string';
  upperCaseString = 'UPPER CASE STRING';
  totalPrice = 3241.23;

  constructor(public $authService: AuthService) {}

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.date.toString());
  }

  ngOnDestroy() {
    console.log('HELLO WORLD DESTROY');
  }
}
