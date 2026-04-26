import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter-component/counter-component';
import { Hero } from './pages/hero/hero';
import { DragonBall } from './pages/dragon-ball/dragon-ball';
import { DragonBallSuper } from './pages/dragon-ball-super/dragon-ball-super';

export const routes: Routes = [
    {
        path: 'counter',
        component: CounterComponent,
    },
    {
        path: 'hero',
        component: Hero,
    },
    {
        path: 'dragon-ball',
        component: DragonBall,
    },
    {
        path: 'dragon-ball-super',
        component: DragonBallSuper,
    },
    {
        path: '**',
        redirectTo: 'counter',
    }

];
