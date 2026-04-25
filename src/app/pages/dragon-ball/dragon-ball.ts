import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [RouterLink],
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
      power: 1000
    }
  ]);
}
