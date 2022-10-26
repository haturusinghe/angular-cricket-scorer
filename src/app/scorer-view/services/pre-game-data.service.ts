import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../i/player';
import { BatterScore } from '../i/player-score';
import { Team } from '../i/team';
import { PlayerDataService } from './player-data.service';

@Injectable({
  providedIn: 'root',
})
export class PreGameDataService {
  startGame = { isOn: false };
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
  playingTeamsXi: Team[] = [
    {
      teamName: 'SL',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
    {
      teamName: 'ind',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
  ];
  toss: string = 'SL';
  choose: string = 'batting';

  getAllTeams(): Observable<Team[]> {
    const teams = of(this.teams);
    return teams;
  }

  start(): Observable<any> {
    const start = of(this.startGame);
    return start;
  }

  setStart(b: boolean) {
    this.startGame.isOn = true;
  }

  getPlayingTeams(): Observable<Team[]> {
    const playingteams = of(this.playingTeams);
    return playingteams;
  }

  getPlayingTeamXi(): Observable<Team[]> {
    const playingteams = of(this.playingTeamsXi);
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
  clearPlayingTeamsXi(n: number) {
    this.playingTeamsXi[n].teamName = '';
    this.playingTeamsXi[n].players = [];
  }
  addPlayingXi(playingTeams: Team, n: number) {
    this.playingTeamsXi[n].players = playingTeams.players.filter(
      (x: Player) => x.checked == true
    );

    this.playingTeamsXi[n].teamName = playingTeams.teamName;
  }

  selectToss(teamName: string) {
    this.toss = teamName;
  }

  TossSelect(role: string) {
    this.choose = role;
  }

  //# TODO :
  getPreGameData() {
    return {
      tournamentName: 'England Tour of Sri Lanka',
      teams: [],
      battingTeamIndex: -1,
      bowlerTeamIndex: -1,
      totalOvers: -1,
    };
  }

  constructor(private playerDataService: PlayerDataService) {}
}
