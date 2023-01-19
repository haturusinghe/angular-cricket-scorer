import { map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BowlerScore } from '../../i/i/bowler-score';
import { BatterScore } from '../../i/i/player-score';
import { Player, ScoreCard } from '../../i/i/score-card';
import { GetLiveScoresService } from '../../services/get-live-scores.service';
import { LiveGameTsService } from '../../services/live-game.ts.service';
import { Ball } from '../../i/i/ball';

@Component({
  selector: 'crx-batting-panel',
  templateUrl: './batting-panel.component.html',
  styleUrls: ['./batting-panel.component.scss'],
})
export class BattingPanelComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  scores: BatterScore[] = [];
  bowlingfig: BowlerScore[] = [];
  teamsNames = { batters: '', bowlers: '' };
  inning: string = '1';

  scoreCard: ScoreCard[] = [];

  constructor(
    private liveDataService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.updateDs();

    console.log('bla bla', this.a_1Wickets);
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();

    console.log(this.scoreCard[0]);
  }
  // getTeamNames() {
  //   this.teamsNames = {
  //     batters: this.scorecard.summary.teamName,
  //     bowlers: this.scorecard.summary.bowlingTeam,
  //   };
  // }

  updateDs() {
    this.getLiveScoresService
      .getScoreCard(localStorage.getItem('match_id') || '')
      .subscribe((s) => {
        this.scoreCard[0] = JSON.parse(s.scorecard);

        this.teamsNames.batters = this.scoreCard[0].summary.teamName;
        this.teamsNames.bowlers = this.scoreCard[0].summary.bowlingTeam;
        this.inning = this.scoreCard[0].summary.inning;
        this.geta_1Wickets(this.scoreCard[0]);
        this.getb_1Wickets(this.scoreCard[0]);
        this.geta_2Wickets(this.scoreCard[0]);
        this.getb_2Wickets(this.scoreCard[0]);

        console.log(this.scoreCard[0]);
        console.log(s.scorecard);
      });
  }

  a_1Wickets: Ball[] = [];
  b_1Wickets: Ball[] = [];
  a_2Wickets: Ball[] = [];
  b_2Wickets: Ball[] = [];

  geta_1Wickets(scoreCard: ScoreCard) {
    console.log('testin loop');
    scoreCard.innings.a_1.allOvers.forEach((over) => {
      over.balls.forEach((ball) => {
        if (ball.Out.isOut) {
          this.a_1Wickets.push(ball);
        }
      });
    });
  }

  getb_1Wickets(scoreCard: ScoreCard) {
    console.log('testin loop');
    scoreCard.innings.b_1.allOvers.forEach((over) => {
      over.balls.forEach((ball) => {
        if (ball.Out.isOut) {
          this.b_1Wickets.push(ball);
        }
      });
    });
  }
  geta_2Wickets(scoreCard: ScoreCard) {
    console.log('testin loop');
    scoreCard.innings.a_2.allOvers.forEach((over) => {
      over.balls.forEach((ball) => {
        if (ball.Out.isOut) {
          this.a_2Wickets.push(ball);
        }
      });
    });
  }

  wicketDetails(striker: string, wickets: Ball[]): string {
    console.log('Hi from wickets');
    let str = '';
    wickets.forEach((wicket) => {
      console.log('Hi from loop');
      if (wicket.striker.name == striker) {
        console.log('Hi from if');
        str = wicket.Out.type + ' by ' + wicket.bowler?.name;
      }
    });
    return str;
  }
  getb_2Wickets(scoreCard: ScoreCard) {
    console.log('testin loop');
    scoreCard.innings.b_2.allOvers.forEach((over) => {
      over.balls.forEach((ball) => {
        if (ball.Out.isOut) {
          this.b_2Wickets.push(ball);
        }
      });
    });
  }
}
export interface Out {
  isOut: boolean;
  type?: string;
}
