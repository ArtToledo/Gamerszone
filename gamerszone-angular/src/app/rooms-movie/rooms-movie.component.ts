import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../shared/interfaces/room';
import { RoomMovieRequestComponent } from './room-movie-request/room-movie-request.component';
import { RoomsMovieService } from './rooms-movie.service';

@Component({
  templateUrl: './rooms-movie.component.html',
  styleUrls: ['./rooms-movie.component.css']
})
export class RoomsMovieComponent implements OnInit {

  idMovie: string;
  nameMovie: string;
  rooms: Room[] = [];

  constructor(
    public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private roomsMovieService: RoomsMovieService
  ) {}

  ngOnInit(): void {
    this.nameMovie = this.actRoute.snapshot.params.name;
    this.idMovie = this.actRoute.snapshot.params.id;
    this.getRooms(this.idMovie);
  }

  getRooms(idMovie: string) {
    this.roomsMovieService.getRooms(idMovie)
      .subscribe(response => {
        this.rooms = this.rooms.concat(response);
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RoomMovieRequestComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
