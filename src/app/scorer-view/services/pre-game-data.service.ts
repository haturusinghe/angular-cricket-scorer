import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cricketer } from '../i/cricketer';
import { Player } from '../i/player';
import { BatterScore } from '../i/player-score';
import { Team } from '../i/team';
import { PlayerDataService } from './player-data.service';

@Injectable({
  providedIn: 'root',
})
export class PreGameDataService {
  constructor(private playerDataService: PlayerDataService) {}

  data = {
    meta: {
      tournamentName: '',
      overs: 0,
      teamA: {
        teamId: 0,
        teamName: '',
        allPlayers: new Array<Player>(),
        selectedPlayers: new Array<Player>(),
        tossWon: false,
        tossChoice: '',
      },
      teamB: {
        teamId: 0,
        teamName: '',
        allPlayers: new Array<Player>(),
        selectedPlayers: new Array<Player>(),
        tossWon: false,
        tossChoice: '',
      },
    },
  };

  startGame = { isOn: false };

  setStart(b: boolean) {
    this.startGame.isOn = true;
  }

  isPreGameComponentClosed(): Observable<any> {
    const start = of(this.startGame);
    return start;
  }

  // REVAMP

  getMatchMetaData(): Observable<any> {
    const data = of(this.data);
    return data;
  }

  setMatchMetaData(meta: any) {
    this.data.meta = meta;
  }

  getOvers(): Observable<number> {
    const overs = of(this.data.meta.overs);
    return overs;
  }

  getTournamentName(): Observable<string> {
    const tournament = of(this.data.meta.tournamentName);
    return tournament;
  }

  getTeamA(): Observable<any> {
    const teamA = of(this.data.meta.teamA);
    return teamA;
  }

  getTeamB(): Observable<any> {
    const teamB = of(this.data.meta.teamB);
    return teamB;
  }

  getFirstBattingTeam(): Observable<any> {
    if (this.data.meta.teamA.tossChoice == 'Batting') {
      const fbTeam = of(this.data.meta.teamA);
      return fbTeam;
    } else if (this.data.meta.teamB.tossChoice == 'Batting') {
      const fbTeam = of(this.data.meta.teamB);
      return fbTeam;
    }

    const fbTeam = of(this.data.meta.teamA);
    return fbTeam;
  }

  getFirstBowlingTeam(): Observable<any> {
    if (this.data.meta.teamA.tossChoice == 'Bowling') {
      const fbTeam = of(this.data.meta.teamA);
      return fbTeam;
    } else if (this.data.meta.teamB.tossChoice == 'Bowling') {
      const fbTeam = of(this.data.meta.teamB);
      return fbTeam;
    }

    const fbTeam = of(this.data.meta.teamB);
    return fbTeam;
  }
}
