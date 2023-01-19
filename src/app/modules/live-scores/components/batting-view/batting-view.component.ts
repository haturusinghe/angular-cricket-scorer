import { Component, OnInit } from '@angular/core';
import { CurrentPlayers, Current_Players } from '../../i/i/score-card';
import { GetLiveScoresService } from '../../services/get-live-scores.service';
import { LiveGameTsService } from '../../services/live-game.ts.service';

@Component({
  selector: 'crx-batting-view',
  templateUrl: './batting-view.component.html',
  styleUrls: ['./batting-view.component.scss'],
})
export class BattingViewComponent implements OnInit {
  batsmen: Current_Players = {
    striker: {
      player: {
        id: 100057,
        name: 'Lahiru A323beysinghe',
        photo: null,
        user_id: 179,
        date_of_birth: '2017-01-01',
        batting_type: 'Right-Handed Batsman',
        bowling_type: null,
        fielding_pos: null,
        batting_pos: null,
        wicket_keeper: 0,
        description: null,
        created_at: '2022-12-15 17:19:59',
        updated_at: '2022-12-15 17:19:59',
        pivot: {
          team_id: 22,
          player_id: 100057,
          verified: 1,
        },
      },
      runs: 12,
      ballsFaced: 3,
      fours: 1,
      sixes: 0,
      strikeRate: 400,
      isStrikingNow: true,
    },
    non_striker: {
      player: {
        id: 100058,
        name: 'Mohommed Aaqil',
        photo: null,
        user_id: 179,
        date_of_birth: '2017-01-01',
        batting_type: 'Right-Handed Batsman',
        bowling_type: null,
        fielding_pos: null,
        batting_pos: null,
        wicket_keeper: 0,
        description: null,
        created_at: '2022-12-15 17:20:15',
        updated_at: '2022-12-15 17:20:15',
        pivot: {
          team_id: 22,
          player_id: 100058,
          verified: 1,
        },
      },
      runs: 4,
      ballsFaced: 2,
      fours: 0,
      sixes: 0,
      strikeRate: 200,
      isStrikingNow: false,
    },
    bowler: {
      player: {
        id: 100075,
        name: 'Dasun Shanaka',
        photo: null,
        user_id: 179,
        date_of_birth: '2017-01-01',
        batting_type: 'Right-Handed Batsman',
        bowling_type: null,
        fielding_pos: null,
        batting_pos: null,
        wicket_keeper: 0,
        description: null,
        created_at: '2022-12-15 17:50:00',
        updated_at: '2022-12-15 17:50:00',
        pivot: {
          team_id: 23,
          player_id: 100075,
          verified: 1,
        },
      },
      runs: 7,
      maidenOvers: 0,
      overs: 0,
      wickets: 0,
      economyRate: 0,
    },
  };

  getCurrentBatsmen(): void {
    this.getLiveScoresService
      .getScoreCard(localStorage.getItem('match_id') || '')
      .subscribe((s) => {
        this.batsmen = JSON.parse(s.scorecard).current_players;
      });
  }

  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService
  ) {}

  ngOnInit(): void {
    this.getCurrentBatsmen();
  }
}
