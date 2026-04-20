import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

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
