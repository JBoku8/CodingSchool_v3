import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  // private _initialValue = 0;
  // get initialValue(): number {
  //   return this._initialValue;
  // }
  // set initialValue(value: number | string) {
  //   this._initialValue = typeof value === 'string' ? parseInt(value) : value;
  // }

  @Input() initialValue: number = 0;
  @Output() onCountChange = new EventEmitter<number>();
  count: number = 0;
  bgColor = 'red';
  decoration = 'underline';
  styles = 'background-color: lightblue; text-decoration: underline';

  constructor() {}

  ngOnInit(): void {
    this.count = this.initialValue;
  }

  onAdd() {
    this.count += 1;
    this.onCountChange.emit(this.count);
  }

  onReset() {
    this.count = 0;
    this.onCountChange.emit(this.count);
  }

  onMinus() {
    this.count -= 1;
    this.onCountChange.emit(this.count);
  }

  getClasses() {
    return {
      colorRed: this.count < 0,
      colorOkay: this.count > 0,
      colorWarning: this.count === 0,
    };
  }
}
