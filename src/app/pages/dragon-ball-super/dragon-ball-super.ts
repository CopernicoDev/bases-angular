import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChararcterDragonBallSuper } from '../../components/shared/chararcter-dragon-ball-super/chararcter-dragon-ball-super';
import { FormCharacterSuper } from '../../components/shared/form-character-super/form-character-super';
import { DragonBallSuperService } from '../../services/dragon-ball-super.service';





@Component({
  selector: 'app-dragon-ball-super',
  imports: [RouterLink, NgClass, ChararcterDragonBallSuper, FormCharacterSuper],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.css',
})
export class DragonBallSuper {

  public dbzService = inject(DragonBallSuperService);


}
