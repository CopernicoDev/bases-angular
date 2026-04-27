import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-form-character-super',
  imports: [],
  templateUrl: './form-character-super.html',
  styleUrl: './form-character-super.css',
})
export class FormCharacterSuper {
  name = signal('');
  power = signal(0);

  // Emitimos un evento hacia el padre con el nuevo personaje
  newCharacter = output<Character>();

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

    // 3. Emitir el evento al componente padre
    this.newCharacter.emit(newCharacter);

    // 4. Limpiar los inputs
    this.name.set('');
    this.power.set(0);
  }
}
