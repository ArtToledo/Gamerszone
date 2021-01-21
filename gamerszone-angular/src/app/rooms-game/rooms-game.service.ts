import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Room } from '../shared/interfaces/room';

const API_URL = environment.API_URL;

@Injectable()
export class RoomsGameService {

  constructor(
    private http: HttpClient
  ) {}

  getRooms(idGame: string) {
    let params = new HttpParams();
    params = params.set('typeRoom', 'game');
    params = params.set('idGame', idGame);

    return this.http.get<Room>(API_URL + '/rooms?' + params);
  }
}
