import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';



interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball-super',
  imports: [RouterLink, NgClass],
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


  getPowerClass(power: number) {
    return {
      'text-danger': power >= 1000,
      'text-primary': power <= 999,
    }
  }

  addCharacter() {
    // 1. Validar que tengamos datos
    if (!this.name() || this.power() <= 0) {
      return;
    }

    // 2. Crear el nuevo personaje
    const newCharacter: Character = {
      name: this.name(),
      power: this.power()
    };

    // 3. Actualizar la signal de characters
    // Usamos .update() que nos da el valor actual (list) y retornamos un nuevo arreglo
    this.characters.update((list) => [...list, newCharacter]);

    // 4. Limpiar los inputs
    this.name.set('');
    this.power.set(0);
  }
}
