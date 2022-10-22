import { Injectable } from '@angular/core';
import { TEAMS } from 'src/app/data/player-data';
import { Team } from '../i/team';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor() { }

  getTeams(): Team[] {
    return TEAMS;
  }
}
