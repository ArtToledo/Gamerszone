import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from './game';
import { GameRequestComponent } from './game-request/game-request.component';
import { GamesService } from './games.service';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent implements OnInit {

  breakpoint: number;
  games: Game[] = [];

  constructor(
    public dialog: MatDialog,
    private gamesService: GamesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 480) ? 2 : 4;
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames()
      .subscribe(response => {
        this.games = this.games.concat(response);
      });
  }

  searchRooms(game: Game) {
    this.route.navigateByUrl(`game/${game.name}/${game.id}/rooms`);
  }

  /* Functions modal */
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 480) ? 2 : 4;
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameRequestComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
