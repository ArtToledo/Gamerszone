import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { RoomsGameComponent } from './rooms-game/rooms-game.component';
import { RoomsMovieComponent } from './rooms-movie/rooms-movie.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'game/:name/:id/rooms',
    component: RoomsGameComponent,
  },
  {
    path: 'movie/:name/:id/rooms',
    component: RoomsMovieComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
