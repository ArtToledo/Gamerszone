import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../shared/interfaces/room';
import { RoomGameRequestComponent } from './room-game-request/room-game-request.component';
import { RoomsGameService } from './rooms-game.service';

@Component({
  templateUrl: './rooms-game.component.html',
  styleUrls: ['./rooms-game.component.css']
})
export class RoomsGameComponent implements OnInit {

  idGame: string;
  nameGame: string;
  rooms: Room[] = [];

  constructor(
    public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private roomsGameService: RoomsGameService
  ) {}

  ngOnInit(): void {
    this.idGame = this.actRoute.snapshot.params.id;
    this.nameGame = this.actRoute.snapshot.params.name;
    this.getRooms(this.idGame);
  }

  getRooms(idGame: string) {
    this.roomsGameService.getRooms(idGame)
      .subscribe(response => {
        this.rooms = this.rooms.concat(response);
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RoomGameRequestComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
