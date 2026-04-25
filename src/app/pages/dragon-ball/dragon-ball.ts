import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';



interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [RouterLink, NgClass],
  templateUrl: './dragon-ball.html',
  styleUrl: './dragon-ball.css',
})
export class DragonBall {

  characters = signal<Character[]>([
    {
      name: 'Goku',
      power: 1000
    },
    {
      name: 'Vegeta',
      power: 1000
    },
    {
      name: 'Piccolo',
      power: 800
    },
    {
      name: 'Krillin',
      power: 500
    },
    {
      name: 'Gohan',
      power: 900
    }
  ]);


  getPowerClass(power: number) {
    return {
      'text-danger': power >= 1000,
      'text-primary': power <= 999,
    }
  }
}
