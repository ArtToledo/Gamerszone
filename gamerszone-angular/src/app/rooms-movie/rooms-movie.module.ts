import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { RoomsMovieComponent } from './rooms-movie.component';
import { RoomMovieRequestComponent } from './room-movie-request/room-movie-request.component';
import { RoomsMovieService } from './rooms-movie.service';

@NgModule({
  declarations: [
    RoomsMovieComponent,
    RoomMovieRequestComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    RoomsMovieService
  ]
})
export class RoomsMovieModule {

}
