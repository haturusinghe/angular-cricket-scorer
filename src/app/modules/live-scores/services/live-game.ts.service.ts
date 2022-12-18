import { MatRadioModule } from '@angular/material/radio';
import { ScoreCard } from './../../../scorer-view/services/score-card';
import { Over } from './../../../scorer-view/i/over';
import { TeamScore } from './../../../scorer-view/i/team-score';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, map, catchError, throwError, of } from 'rxjs';
import { BatterScore } from 'src/app/scorer-view/i/player-score';
import { LiveScores } from 'src/app/scorer-view/i/livescores';

@Injectable({
  providedIn: 'root',
})
export class LiveGameTsService {
  endpoint: string = 'https://cricketchampx.com/v1/api';

  scoreCards = {
    match_id: 'test_1999',
    date: '14/12/2022',
    description: 'ONGOING',
    team_one: 'SACK 2nd XI',
    team_two: 'Sri Lanka',
    scorecard: '',
  };

  scoreCard: LiveScores = {
    match_id: 'test_1999',
    date: '14/12/2022',
    description: 'ONGOING',
    team_one: 'SACK 2nd XI',
    team_two: 'Sri Lanka',
    scorecard: {
      inning: 1,
      batting: true,
      totalOvers: 0,
      a_1: {
        teamName: 'SLC CRIC',
        totalRuns: 20,
        batting: [
          {
            player: {
              id: 100071,
              name: 'Kusal Mendis',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:10',
              updated_at: '2022-12-15 17:38:10',
              pivot: {
                team_id: 23,
                player_id: 100071,
                verified: 1,
              },
            },
            runs: 6,
            ballsFaced: 5,
            fours: 0,
            sixes: 1,
            strikeRate: 120,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100072,
              name: 'Dinesh Chandimal',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:24',
              updated_at: '2022-12-15 17:38:24',
              pivot: {
                team_id: 23,
                player_id: 100072,
                verified: 1,
              },
            },
            runs: 5,
            ballsFaced: 3,
            fours: 1,
            sixes: 0,
            strikeRate: 166.67,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100073,
              name: 'Dhananjaya de Silva',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:49:29',
              updated_at: '2022-12-15 17:49:29',
              pivot: {
                team_id: 23,
                player_id: 100073,
                verified: 1,
              },
            },
            runs: 3,
            ballsFaced: 6,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100070,
              name: 'Pathum Nissanka',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:37:57',
              updated_at: '2022-12-15 17:37:57',
              pivot: {
                team_id: 23,
                player_id: 100070,
                verified: 1,
              },
            },
            runs: 5,
            ballsFaced: 4,
            fours: 0,
            sixes: 0,
            strikeRate: 125,
            isStrikingNow: false,
          },
        ],
        bowling: [
          {
            player: {
              id: 100070,
              name: 'Pathum Nissanka',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:37:57',
              updated_at: '2022-12-15 17:37:57',
              pivot: {
                team_id: 23,
                player_id: 100070,
                verified: 1,
              },
            },
            runs: 6,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 6,
          },
          {
            player: {
              id: 100071,
              name: 'Kusal Mendis',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:10',
              updated_at: '2022-12-15 17:38:10',
              pivot: {
                team_id: 23,
                player_id: 100071,
                verified: 1,
              },
            },
            runs: 5,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 5,
          },
          {
            player: {
              id: 100072,
              name: 'Dinesh Chandimal',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:24',
              updated_at: '2022-12-15 17:38:24',
              pivot: {
                team_id: 23,
                player_id: 100072,
                verified: 1,
              },
            },
            runs: 4,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 4,
          },
        ],
      },

      a_2: {
        teamName: 'SLC CRIC',
        totalRuns: 230,
        batting: [
          {
            player: {
              id: 100071,
              name: 'Kusal Mendis',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:10',
              updated_at: '2022-12-15 17:38:10',
              pivot: {
                team_id: 23,
                player_id: 100071,
                verified: 1,
              },
            },
            runs: 6,
            ballsFaced: 5,
            fours: 0,
            sixes: 1,
            strikeRate: 120,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100072,
              name: 'Dinesh Chandimal',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:24',
              updated_at: '2022-12-15 17:38:24',
              pivot: {
                team_id: 23,
                player_id: 100072,
                verified: 1,
              },
            },
            runs: 5,
            ballsFaced: 3,
            fours: 1,
            sixes: 0,
            strikeRate: 166.67,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100073,
              name: 'Dhananjaya de Silva',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:49:29',
              updated_at: '2022-12-15 17:49:29',
              pivot: {
                team_id: 23,
                player_id: 100073,
                verified: 1,
              },
            },
            runs: 3,
            ballsFaced: 6,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100070,
              name: 'Pathum Nissanka',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:37:57',
              updated_at: '2022-12-15 17:37:57',
              pivot: {
                team_id: 23,
                player_id: 100070,
                verified: 1,
              },
            },
            runs: 5,
            ballsFaced: 4,
            fours: 0,
            sixes: 0,
            strikeRate: 125,
            isStrikingNow: false,
          },
        ],
        bowling: [
          {
            player: {
              id: 100070,
              name: 'Pathum Nissanka',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:37:57',
              updated_at: '2022-12-15 17:37:57',
              pivot: {
                team_id: 23,
                player_id: 100070,
                verified: 1,
              },
            },
            runs: 6,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 6,
          },
          {
            player: {
              id: 100071,
              name: 'Kusal Mendis',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:10',
              updated_at: '2022-12-15 17:38:10',
              pivot: {
                team_id: 23,
                player_id: 100071,
                verified: 1,
              },
            },
            runs: 5,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 5,
          },
          {
            player: {
              id: 100072,
              name: 'Dinesh Chandimal',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:38:24',
              updated_at: '2022-12-15 17:38:24',
              pivot: {
                team_id: 23,
                player_id: 100072,
                verified: 1,
              },
            },
            runs: 4,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 4,
          },
        ],
      },
      b_1: {
        teamName: 'SACK 1st XI',
        wickets: 5,
        currentOver: 4,
        ballsbowled: 3,
        batting: [
          {
            player: {
              id: 100057,
              name: 'Lahiru Abeysinghe',
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
            runs: 9,
            ballsFaced: 7,
            fours: 2,
            sixes: 0,
            strikeRate: 128.57,
            isStrikingNow: true,
          },
          {
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
            runs: 1,
            ballsFaced: 2,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100060,
              name: 'Kavindu Shehan',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:20:51',
              updated_at: '2022-12-15 17:20:51',
              pivot: {
                team_id: 22,
                player_id: 100060,
                verified: 1,
              },
            },
            runs: 1,
            ballsFaced: 2,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100062,
              name: 'Charuka Ekanayake',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:34:50',
              updated_at: '2022-12-15 17:34:50',
              pivot: {
                team_id: 22,
                player_id: 100062,
                verified: 1,
              },
            },
            runs: 1,
            ballsFaced: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 33.33,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100068,
              name: 'Senura abeysekara',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:36:33',
              updated_at: '2022-12-15 17:36:33',
              pivot: {
                team_id: 22,
                player_id: 100068,
                verified: 1,
              },
            },
            runs: 0,
            ballsFaced: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 0,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100063,
              name: 'Ravindu Kapukotuwa',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:35:09',
              updated_at: '2022-12-15 17:35:09',
              pivot: {
                team_id: 22,
                player_id: 100063,
                verified: 1,
              },
            },
            runs: 3,
            ballsFaced: 1,
            fours: 0,
            sixes: 0,
            strikeRate: 300,
            isStrikingNow: false,
          },
        ],
        bowling: [
          {
            player: {
              id: 100057,
              name: 'Lahiru Abeysinghe',
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
            runs: 9,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 9,
          },
          {
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
            runs: 6,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 6,
          },
          {
            player: {
              id: 100059,
              name: 'Induwara Galapitage',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:20:34',
              updated_at: '2022-12-15 17:20:34',
              pivot: {
                team_id: 22,
                player_id: 100059,
                verified: 1,
              },
            },
            runs: 4,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 4,
          },
        ],
      },
      b_2: {
        teamName: 'SACK 1st XI',
        wickets: 5,
        currentOver: 4,
        ballsbowled: 3,
        batting: [
          {
            player: {
              id: 100057,
              name: 'Lahiru Abeysinghe',
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
            runs: 9,
            ballsFaced: 7,
            fours: 2,
            sixes: 0,
            strikeRate: 128.57,
            isStrikingNow: true,
          },
          {
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
            runs: 1,
            ballsFaced: 2,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100060,
              name: 'Kavindu Shehan',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:20:51',
              updated_at: '2022-12-15 17:20:51',
              pivot: {
                team_id: 22,
                player_id: 100060,
                verified: 1,
              },
            },
            runs: 1,
            ballsFaced: 2,
            fours: 0,
            sixes: 0,
            strikeRate: 50,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100062,
              name: 'Charuka Ekanayake',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:34:50',
              updated_at: '2022-12-15 17:34:50',
              pivot: {
                team_id: 22,
                player_id: 100062,
                verified: 1,
              },
            },
            runs: 1,
            ballsFaced: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 33.33,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100068,
              name: 'Senura abeysekara',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:36:33',
              updated_at: '2022-12-15 17:36:33',
              pivot: {
                team_id: 22,
                player_id: 100068,
                verified: 1,
              },
            },
            runs: 0,
            ballsFaced: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 0,
            isStrikingNow: true,
          },
          {
            player: {
              id: 100063,
              name: 'Ravindu Kapukotuwa',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:35:09',
              updated_at: '2022-12-15 17:35:09',
              pivot: {
                team_id: 22,
                player_id: 100063,
                verified: 1,
              },
            },
            runs: 3,
            ballsFaced: 1,
            fours: 0,
            sixes: 0,
            strikeRate: 300,
            isStrikingNow: false,
          },
        ],
        bowling: [
          {
            player: {
              id: 100057,
              name: 'Lahiru Abeysinghe',
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
            runs: 9,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 9,
          },
          {
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
            runs: 6,
            maidenOvers: 0,
            overs: 1,
            wickets: 2,
            economyRate: 6,
          },
          {
            player: {
              id: 100059,
              name: 'Induwara Galapitage',
              photo: null,
              user_id: 179,
              date_of_birth: '2017-01-01',
              batting_type: 'Right-Handed Batsman',
              bowling_type: null,
              fielding_pos: null,
              batting_pos: null,
              wicket_keeper: 0,
              description: null,
              created_at: '2022-12-15 17:20:34',
              updated_at: '2022-12-15 17:20:34',
              pivot: {
                team_id: 22,
                player_id: 100059,
                verified: 1,
              },
            },
            runs: 4,
            maidenOvers: 0,
            overs: 1,
            wickets: 0,
            economyRate: 4,
          },
        ],
      },
    },
  };

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  loginStatus = { isLoggedIn: false };

  constructor(
    private http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.setScorecard('test_1999');
    this.getSummary('test_1999');
  }
  firstTeamBattingScores = new Array<BatterScore>();
  getSummary(matchid: string): Observable<TeamScore> {
    //   // // let api = `${this.endpoint}/scores/live-score/test_1999`;
    //   // // return this.http.get(api, { headers: this.headers }).pipe(
    //   // //   map((res) => {
    //   // //     return res || {};
    //   // //   }),
    //   // //   catchError(this.handleError)
    //   // // );

    // this.scoreCard.match_id = this.scoreCards.match_id;
    // this.scoreCard.date = this.scoreCards.date;
    // this.scoreCard.description = this.scoreCards.description;
    // this.scoreCard.team_one = this.scoreCards.team_one;
    // this.scoreCard.team_two = this.scoreCards.team_two;
    // this.scoreCard.scorecard = JSON.parse(this.scoreCards.scorecard);
    // console.log(this.scoreCard);

    let teamScore: TeamScore = {
      teamName: this.scoreCard.scorecard.a_2.teamName,
      bowlingTeam: this.scoreCard.scorecard.b_2.teamName,
      totalScore: this.scoreCard.scorecard.a_2.totalRuns || 0,
      wickets: this.scoreCard.scorecard.b_2.wickets || 0,
      inning: 1,
      currentOver: this.scoreCard.scorecard.b_2.currentOver,
      overBallsBowled: this.scoreCard.scorecard.b_2.ballsbowled,
      totalOvers: this.scoreCard.scorecard.totalOvers,
    };
    if (this.scoreCard.scorecard.batting) {
      if (this.scoreCard.scorecard.inning == 1) {
        teamScore = {
          teamName: this.scoreCard.scorecard.a_1.teamName,
          bowlingTeam: this.scoreCard.scorecard.b_1.teamName,
          totalScore: this.scoreCard.scorecard.a_1.totalRuns || 0,
          wickets: this.scoreCard.scorecard.b_1.wickets || 0,
          inning: 1,
          currentOver: this.scoreCard.scorecard.b_1.currentOver,
          overBallsBowled: this.scoreCard.scorecard.b_1.ballsbowled,
          totalOvers: this.scoreCard.scorecard.totalOvers,
        };
      } else if (this.scoreCard.scorecard.inning == 2) {
        teamScore = {
          teamName: this.scoreCard.scorecard.a_2.teamName,
          bowlingTeam: this.scoreCard.scorecard.b_2.teamName,
          totalScore: this.scoreCard.scorecard.a_2.totalRuns || 0,
          wickets: this.scoreCard.scorecard.b_2.wickets || 0,
          inning: 1,
          currentOver: this.scoreCard.scorecard.b_2.currentOver,
          overBallsBowled: this.scoreCard.scorecard.b_2.ballsbowled,
          totalOvers: this.scoreCard.scorecard.totalOvers,
        };
      }
    } else {
      if (this.scoreCard.scorecard.inning == 1) {
        teamScore = {
          teamName: this.scoreCard.scorecard.b_1.teamName,
          bowlingTeam: this.scoreCard.scorecard.a_1.teamName,
          totalScore: this.scoreCard.scorecard.b_1.totalRuns || 0,
          wickets: this.scoreCard.scorecard.a_1.wickets || 0,
          inning: 1,
          currentOver: this.scoreCard.scorecard.a_1.currentOver,
          overBallsBowled: this.scoreCard.scorecard.a_1.ballsbowled,
          totalOvers: this.scoreCard.scorecard.totalOvers,
        };
      } else if (this.scoreCard.scorecard.inning == 2) {
        teamScore = {
          teamName: this.scoreCard.scorecard.b_2.teamName,
          bowlingTeam: this.scoreCard.scorecard.a_2.teamName,
          totalScore: this.scoreCard.scorecard.b_2.totalRuns || 0,
          wickets: this.scoreCard.scorecard.a_2.wickets || 0,
          inning: 2,
          currentOver: this.scoreCard.scorecard.a_2.currentOver,
          overBallsBowled: this.scoreCard.scorecard.a_2.ballsbowled,
          totalOvers: this.scoreCard.scorecard.totalOvers,
        };
      }
    }
    console.log(teamScore);
    const score = of(teamScore);
    return score;
  }

  getScoreCard(matchid: string): Observable<any> {
    let api = `${this.endpoint}/scores/live-score/test_1999`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  setScorecard(matchid: string) {
    this.getScoreCard(matchid).subscribe((s) => (this.scoreCards = s));
  }

  // getCurrentBatsman(): Observable<any> {
  //   let batsmen: BatterScore[] =
  //     this.scoreCard.scorecard.innings.score.currentBatsmans;

  //   const score = of(batsmen);
  //   return score;
  // }

  postScorecardToApi(scoreCard = {}): Observable<any> {
    let api = `${this.endpoint}/account/save-score-card`;
    console.log(JSON.stringify(scoreCard));
    return this.http
      .post(api, JSON.stringify(scoreCard), { headers: this.headers })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  // getBattingTeam(): any {
  //   return {
  //     batters: this.scoreCard.scorecard.innings.batting,
  //     bowlers: this.scoreCard.scorecard.innings.bowling,
  //   };
  // }

  // getPlayerTeamScores(): Observable<any[]> {
  //   // const playerScores = of(this.scoreCard.scorecard.innings.score.batsmans);
  //   return playerScores;
  // }

  getPlayerBowlingFigures(): Observable<any> {
    const playerScores = of();
    // this.scoreCard.scorecard.innings.score.bowling.bowlers
    return playerScores;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
