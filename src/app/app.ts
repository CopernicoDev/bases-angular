import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './pages/counter-component/counter-component';
import { Hero } from './pages/hero/hero';
import { Navbar } from './components/shared/navbar/navbar';
import { DragonBall } from './pages/dragon-ball/dragon-ball';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, Hero, Navbar, DragonBall],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nicolás');
}
