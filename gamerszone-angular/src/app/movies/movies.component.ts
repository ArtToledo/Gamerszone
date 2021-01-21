import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { MovieRequestComponent } from './movie-request/movie-request.component';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  breakpoint: number;
  movies: Movie[] = [];

  constructor(
    public dialog: MatDialog,
    private moviesService: MoviesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 480) ? 2 : 4;
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies()
      .subscribe(response => {
        this.movies = this.movies.concat(response);
      });
  }

  searchRooms(movie: Movie) {
    this.route.navigateByUrl(`movie/${movie.name}/${movie.id}/rooms`);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 480) ? 2 : 4;
  }

  openDialog() {
    const dialogRef = this.dialog.open(MovieRequestComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
