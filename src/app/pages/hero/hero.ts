import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(name: string, age: number) {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    return `${this.name.set('Spiderman')}-${this.age.set(25)}`
  }

  changeAge(value: number) {
    this.age.update((currentValue) => currentValue + value);
  }

  resetHero() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  BigName() {
    return this.name().toUpperCase();
  }
}
