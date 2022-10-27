import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../i/player';
import { BatterScore } from '../i/player-score';
import { Team } from '../i/team';
import { PlayerDataService } from './player-data.service';
import { TeamDataService } from './team-data.service';

@Injectable({
  providedIn: 'root',
})
export class PreGameDataService {
  startGame = { isOn: false };
  teams: Team[] = this.playerDataService.getTeams();
  playingTeams: Team[] = [];

  playingTeamsXi: Team[] = [
    {
      teamName: 'SL',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
    {
      teamName: 'ind',
      players: [{ id: 5, first_name: 'abc', last_name: 'Smead' }],
    },
  ];
  toss: string = 'SL';
  choose: string = 'batting';
  tournaments!: string[];
  tournament!: string;
  overs!: number;

  selectOvers(overs: number) {
    this.overs = overs;
  }

  getOvers(): Observable<number> {
    const overs = of(this.overs);
    return overs;
  }

  getTournamentName(): Observable<string> {
    const tournament = of(this.tournament);
    return tournament;
  }

  selectTournament(tournamentName: string) {
    this.tournament = tournamentName;
  }

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
  // addPlayingXi(playingTeams: Team, n: number) {
  //   this.playingTeamsXi[n].players = playingTeams.players.filter(
  //     (x: Player) => x.checked == true
  //   );

  //   this.playingTeamsXi[n].teamName = playingTeams.teamName;
  // }

  selectToss(teamName: string) {
    this.toss = teamName;
  }

  setTeamXi(playingXi: Team[]) {
    this.clearPlayingTeamsXi(0);
    this.clearPlayingTeamsXi(1);
    this.playingTeamsXi[0].teamName = playingXi[0].teamName;
    this.playingTeamsXi[1].teamName = playingXi[1].teamName;
    this.playingTeamsXi[0].players = playingXi[0].players;
    this.playingTeamsXi[1].players = playingXi[1].players;
  }
  getToss(): string {
    return this.toss;
  }

  TossSelect(role: string) {
    this.choose = role;
  }

  //# TODO :
  getPreGameData() {
    let roleIndex = this.findBattingTeam();

    return {
      tournamentName: this.tournament,
      teams: this.playingTeamsXi,
      battingTeamIndex: roleIndex.batting,
      bowlerTeamIndex: roleIndex.bowling,
      totalOvers: this.overs,
    };
  }

  findBattingTeam() {
    let i = 0;

    for (let team of this.playingTeamsXi) {
      if ((team.teamName = this.toss)) {
        if (this.choose == 'Batting') {
          return { batting: i, bowling: Math.abs(i - 1) };
        } else {
          return { batting: Math.abs(i - 1), bowling: i };
        }
      }

      i++;
    }
    return { batting: -1, bowling: -1 };
  }

  constructor(
    private playerDataService: PlayerDataService,
    private teamDataService: TeamDataService
  ) {}
}
