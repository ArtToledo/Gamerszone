import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { MoviesComponent } from './movies.component';
import { MovieRequestComponent } from './movie-request/movie-request.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieRequestComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule {

}
