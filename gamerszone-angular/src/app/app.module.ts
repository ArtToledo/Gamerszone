import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SupportModule } from './support/support.module';
import { GamesModule } from './games/games.module';
import { MoviesModule } from './movies/movies.module';
import { RoomsGameModule } from './rooms-game/rooms-game.module';
import { RoomsMovieModule } from './rooms-movie/rooms-movie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    SupportModule,
    GamesModule,
    BrowserAnimationsModule,
    MoviesModule,
    RoomsGameModule,
    RoomsMovieModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
