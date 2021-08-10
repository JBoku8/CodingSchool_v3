import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.scss'],
})
export class HelloWorldComponent implements OnInit {
  @Input() title = '';
  date = new Date();
  lowerCaseString = 'lower case string';
  upperCaseString = 'UPPER CASE STRING';
  totalPrice = 3241.23;

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.date.toString());
  }
}
