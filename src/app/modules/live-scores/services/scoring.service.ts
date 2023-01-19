import { GetLiveScoresService } from './get-live-scores.service';
import { GetLiveComponent } from './../components/get-live/get-live.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Over } from '../i/i/over';
import { Ball } from '../i/i/ball';

@Injectable({
  providedIn: 'root',
})
export class ScoringService {
  allMatches: AllMatchesList[] = [];
  liveMatchList: MatchSummary[] = [];
  pastMatchList: MatchSummary[] = [];
  resumeData: ResumeCard[] = [];

  constructor(private teamDataService: GetLiveScoresService) {
    this.initResumeCard();
    this.getMatchList();
  }

  getMatchList(): void {
    this.teamDataService.getMatches().subscribe((s) => {
      this.allMatches = s.data;
      let isOver = true;
      this.allMatches.forEach((m) => {
        if (m.match_id.indexOf('r_') == -1) {
          if (m.description == 'ONGOING') {
            isOver = false;
          } else {
            const d = JSON.parse(m.description);
            isOver = d.isOver;
          }

          if (isOver) {
            this.pastMatchList.push({
              team_one: m.team_one,
              team_two: m.team_two,
              isOver: isOver,
              date: m.date,
              match_id: m.match_id,
            });
          } else {
            this.liveMatchList.push({
              team_one: m.team_one,
              team_two: m.team_two,
              isOver: isOver,
              date: m.date,
              match_id: m.match_id,
            });
          }
        }
      });
    });
  }

  initResumeCard() {
    this.teamDataService
      .getSingleMatchData('resume_test_match_x')
      .subscribe((response) => {
        this.resumeData[0] = JSON.parse(response.scorecard);
        console.log(this.resumeData[0]);
      });
  }

  /* initResumeCard(match_id: string) {
    let id = 'resume_' + match_id;
    this.teamDataService.getSingleMatchData(id).subscribe((response) => {
      this.resumeData[0] = JSON.parse(response.scorecard);
      // console.log(this.resumeData[0]);
    });
  } */

  getLiveMatchList(): Observable<MatchSummary[]> {
    const summaryList = of(this.liveMatchList);
    return summaryList;
  }
  getPastMatchList(): Observable<MatchSummary[]> {
    const summaryList = of(this.pastMatchList);
    return summaryList;
  }

  getResumeCardArr0(): Observable<ResumeCard[]> {
    console.log(this.resumeData);
    const resumeData = of(this.resumeData);
    console.log(resumeData);
    return resumeData;
  }
}

export interface AllMatchesList {
  id: number;
  scorecard?: string;
  created_at: Date;
  updated_at: Date;
  description: string;
  team_one: string;
  team_two: string;
  date: string;
  match_id: string;
}

export interface Description {
  scorer_id: string;

  isOver: boolean;
}
export interface MatchSummary {
  team_one: string;
  team_two: string;
  date: string;
  match_id: string;
  isOver: boolean;
}

export interface ResumeCard {
  current_players: CurrentPlayers;
  over_data: OverData;
  inning_data: InningData;
  team_data: TeamData;
  battingTeamScore: BattingTeamScore;
  teamPlayerScores: TeamPlayerScore[];
  match_id: string;
  tournament_name: string;
}

export interface BattingTeamScore {
  teamName: string;
  bowlingTeam: string;
  inning: string;
  totalScore: number;
  wickets: number;
}

export interface CurrentPlayers {
  striker: NonStriker;
  nonStriker: NonStriker;
  bowler: Bowl;
}

export interface Bowl {
  player: Player;
  runs: number;
  maidenOvers: number;
  overs: number;
  wickets: number;
  economyRate: number;
}

export interface Player {
  id: number;
  name: string;
  photo: null;
  user_id: number;
  date_of_birth: Date;
  batting_type: string;
  bowling_type: null;
  fielding_pos: null;
  batting_pos: null;
  wicket_keeper: number;
  description: null;
  created_at: Date;
  updated_at: Date;
  pivot: Pivot;
}

export interface Pivot {
  team_id: number;
  player_id: number;
  verified: number;
}

export interface NonStriker {
  player: Player;
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isStrikingNow: boolean;
}

export interface InningData {
  isTestMatch: boolean;
  inningThreshold: number;
  currentInning: number;
}

export interface OverData {
  ballLeftForOver: number;
  currentOverNumber: number;
  allOvers: Over[];
  currentOver: CurrentOver;
  ballsForThisOver: Ball[];
  totalOvers: number;
}

// export interface AllOver {
//   overNumber: number;
//   balls: Ball[];
//   score: number;
//   wickets: number;
//   striker: NonStriker;
//   nonStriker: NonStriker;
//   bowler: Bowl;
// }

// export interface Ball {
//   runs: number;
//   is4: boolean;
//   is6: boolean;
//   extras: string[];
//   Out: Out;
//   bowler: Player;
//   bowlType: string;
//   bowlSpeed: number;
//   striker: Player;
//   shotType: string;
//   shotAngle: number;
//   nonStriker: Player;
// }

export interface Out {
  isOut: boolean;
  type: null | string;
}

export interface CurrentOver {
  currentOver: number;
  ballsLeft: number;
  balls: any[];
}

export interface TeamPlayerScore {
  teamName: string;
  batting: NonStriker[];
  bowling: Bowl[];
}

export interface TeamData {
  battingTeamIndex: number;
  bowlerTeamIndex: number;
  teams: Team[];
}

export interface Team {
  teamId: number;
  teamName: string;
  allPlayers: Player[];
  selectedPlayers: Player[];
  tossWon: boolean;
  tossChoice: string;
}
