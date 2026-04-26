import { Component, signal, input } from '@angular/core';


interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-chararcter-dragon-ball-super',
  imports: [],
  templateUrl: './chararcter-dragon-ball-super.html',
  styleUrl: './chararcter-dragon-ball-super.css',
})
export class ChararcterDragonBallSuper {
  name = signal('');
  power = signal(0);

  characters = input<Character[]>([]);

}
