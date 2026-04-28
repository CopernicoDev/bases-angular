import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })


export class DragonBallSuperService {
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

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters-dbz', JSON.stringify(this.characters()));
    })

    addCharacter(newCharacter: Character) {
        this.characters.update(list => [...list, newCharacter]);
    }

}