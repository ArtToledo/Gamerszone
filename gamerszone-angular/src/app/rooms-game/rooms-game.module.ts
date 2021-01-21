import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { RoomGameRequestComponent } from './room-game-request/room-game-request.component';
import { RoomsGameComponent } from './rooms-game.component';
import { RoomsGameService } from './rooms-game.service';

@NgModule({
  declarations: [
    RoomsGameComponent,
    RoomGameRequestComponent
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
    RoomsGameService
  ]
})
export class RoomsGameModule {

}
