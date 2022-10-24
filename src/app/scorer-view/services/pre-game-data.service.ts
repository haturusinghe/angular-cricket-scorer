import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BatterScore } from '../i/player-score';
import { Team } from '../i/team';
import { PlayerDataService } from './player-data.service';

@Injectable({
  providedIn: 'root',
})
export class PreGameDataService {
  teams: Team[] = this.playerDataService.getTeams();
  playingTeams: Team[] = [
    {
      teamName: 'SL',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
    {
      teamName: 'ind',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
  ];
  playingTeamsXi: Team[] = this.playingTeams;
  toss: string = 'SL';
  choose: string = 'batting';

  getAllTeams(): Observable<Team[]> {
    const teams = of(this.teams);
    return teams;
  }

  getPlayingTeams(): Observable<Team[]> {
    const playingteams = of(this.playingTeams);
    return playingteams;
  }

  addPlayingTeams(playingTeams: Team, n: number) {
    this.playingTeams[n].teamName = playingTeams.teamName;

    playingTeams.players.forEach((player) => {
      this.playingTeams[n].players.push(player);
    });
  }
  clearPlayingTeams(n: number) {
    this.playingTeams[n].teamName = '';
    this.playingTeams[n].players = [];
  }
  setPlayingXi(playingXi: Team, n: number) {
    this.playingTeamsXi[n] = playingXi;
  }

  selectToss(teamName: string) {
    this.toss = teamName;
  }

  TossSelect(role: string) {
    this.choose = role;
  }

  constructor(private playerDataService: PlayerDataService) {}
}
