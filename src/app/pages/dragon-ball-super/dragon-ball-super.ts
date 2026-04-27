import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChararcterDragonBallSuper } from '../../components/shared/chararcter-dragon-ball-super/chararcter-dragon-ball-super';
import { FormCharacterSuper } from '../../components/shared/form-character-super/form-character-super';





@Component({
  selector: 'app-dragon-ball-super',
  imports: [RouterLink, NgClass, ChararcterDragonBallSuper, FormCharacterSuper],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.css',
})
export class DragonBallSuper {
  name = signal('');
  power = signal(0);

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

  addCharacter(newCharacter: Character) {
    this.characters.update(list => [...list, newCharacter]);
  }

}
