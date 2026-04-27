import { Component, signal, input } from '@angular/core';




@Component({
  selector: 'app-chararcter-dragon-ball-super',
  imports: [],
  templateUrl: './chararcter-dragon-ball-super.html',
  styleUrl: './chararcter-dragon-ball-super.css',
})
export class ChararcterDragonBallSuper {

  characters = input.required<Character[]>();
  listName = input.required<string>();

}
