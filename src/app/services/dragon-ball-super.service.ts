import { effect, Injectable, signal } from '@angular/core';

function loadFromLocalStorage(): Character[] {
    const characters = localStorage.getItem('characters-dbz');
    if (characters) {
        return JSON.parse(characters);
    }
    return [];
}

@Injectable({ providedIn: 'root' })


export class DragonBallSuperService {
    name = signal('');
    power = signal(0);

    characters = signal<Character[]>(
        loadFromLocalStorage()
    );

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters-dbz', JSON.stringify(this.characters()));
    })

    addCharacter(newCharacter: Character) {
        this.characters.update(list => [...list, newCharacter]);
    }

}