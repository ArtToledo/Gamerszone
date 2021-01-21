import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Movie } from './movie';

const API_URL = environment.API_URL;

@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient
  ) {}

  getMovies() {
    return this.http.get<Movie>(API_URL + '/movies');
  }
}
