import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { GamesComponent } from './games.component';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { GameRequestComponent } from './game-request/game-request.component';
import { GamesService } from './games.service';

@NgModule({
  declarations: [
    GamesComponent,
    GameRequestComponent
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
    GamesService
  ]
})
export class GamesModule { }
