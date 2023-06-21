import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  counter: number = 12;
  add: number = 1;
  rest: number = -1;

  increase_and_dicrease(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 12;
  }
}
