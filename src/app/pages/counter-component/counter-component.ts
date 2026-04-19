import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  countersignal = signal(10);
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
    this.countersignal.update((currentValue) => currentValue + value);
  }

  resetCounter() {
    this.counter = 0;
    this.countersignal.set(0);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.countersignal.update((currentValue) => currentValue - value);
  }
}
