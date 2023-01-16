import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ball } from '../i/ball';
import { Over } from '../i/over';
import { TeamDataService } from './team-data.service';

@Injectable({
  providedIn: 'root',
})
export class ResumeScoringService {
  allMatches: AllMatchesList[] = [];
  summaryList: MatchSummary[] = [];
  resumeData: ResumeCard[] = [];

  constructor(private teamDataService: TeamDataService) {
    // this.initResumeCard();
    // this.getMatchList();
  }

  getMatchList(): void {
    this.teamDataService.getMatches().subscribe((s) => {
      this.allMatches = s.data;
      this.allMatches.forEach((m) => {
        this.summaryList.push({
          team_one: m.team_one,
          team_two: m.team_two,
          date: m.date,
          match_id: m.match_id,
        });
      });
    });
  }

  initResumeCard() {
    this.teamDataService
      .getSingleMatchData('resume_test_match_x')
      .subscribe((response) => {
        this.resumeData[0] = JSON.parse(response.scorecard);
        // console.log(this.resumeData[0]);
      });
  }

  /* initResumeCard(match_id: string) {
    let id = 'resume_' + match_id;
    this.teamDataService.getSingleMatchData(id).subscribe((response) => {
      this.resumeData[0] = JSON.parse(response.scorecard);
      // console.log(this.resumeData[0]);
    });
  } */

  getMatchSummaryList(): Observable<MatchSummary[]> {
    const summaryList = of(this.summaryList);
    return summaryList;
  }

  getResumeCardArr0(): Observable<ResumeCard[]> {
    const resumeData = of(this.resumeData);
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

export interface MatchMetaDescription {
  status: string;
  scorer_id: string;
}

export interface MatchSummary {
  team_one: string;
  team_two: string;
  date: string;
  match_id: string;
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

/* export interface AllOver {
  overNumber: number;
  balls: Ball[];
  score: number;
  wickets: number;
  striker: NonStriker;
  nonStriker: NonStriker;
  bowler: Bowl;
} */

/* export interface Ball {
  runs: number;
  is4: boolean;
  is6: boolean;
  extras: string[];
  Out: Out;
  bowler: Player;
  bowlType: string;
  bowlSpeed: number;
  striker: Player;
  shotType: string;
  shotAngle: number;
  nonStriker: Player;
} */

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
