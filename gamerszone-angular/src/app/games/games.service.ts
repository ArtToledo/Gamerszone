import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Game } from './game';

const API_URL = environment.API_URL;

@Injectable()
export class GamesService {

  constructor(
    private http: HttpClient
  ) {}

  getGames() {
    return this.http.get<Game>(API_URL + '/games');
  }
}
