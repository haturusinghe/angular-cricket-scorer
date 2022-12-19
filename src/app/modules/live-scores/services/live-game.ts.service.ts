import { scoreText } from 'src/app/scorer-view/i/score-text';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Scorecard, CurrentPlayers } from '../i/i/score-card';
import { TeamScore } from '../i/i/team-score';
import { GetLiveScoresService } from './get-live-scores.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LiveGameTsService implements Resolve<Observable<Scorecard>>{
  endpoint: string = 'https://cricketchampx.com/v1/api';

  scoreCard: Scorecard = {
    match_id: 'test_1999',
    date: '14/12/2022',
    description: 'ONGOING',
    team_one: 'SACK 2nd XI',
    team_two: 'Sri Lanka',
    created_at: '2022-12-18 15:48:55',
    id: 13,
    updated_at: '2022-12-18 15:48:55',
    score_card: {
      meta: {
        tName: 'Tournament ssTest',
        totalOvers: 20,
        batting: 'SACK 1sts XI',
        format: 'test',
      },
      summary: {
        teamName: 'SLC CRIC',
        bowlingTeam: 'SACK 1st XI',
        inning: '2nd',
        totalScore: 100,
        wickets: 3,
      },
      current_over: {
        currentOver: 1,
        ballsLeft: 6,
        balls: [
          {
            runs: 3,
            is4: false,
            is6: false,
            extras: [],
            Out: {
              isOut: false,
              type: '',
            },
            bowler: {
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
            bowlType: 'Bouncer',
            bowlSpeed: 10,
            striker: {
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
            shotType: 'Drive',
            shotAngle: 0,
            nonStriker: {
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
          },
          {
            runs: 4,
            is4: true,
            is6: false,
            extras: [],
            Out: {
              isOut: false,
              type: '',
            },
            bowler: {
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
            bowlType: 'Bouncer',
            bowlSpeed: 10,
            striker: {
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
            shotType: 'Drive',
            shotAngle: 0,
            nonStriker: {
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
          },
        ],
      },
      current_players: {
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
      },

      // inning: 1,
      // batting: true,
      // totalOvers: 0,
      innings: {
        a_1: {
          teamName: 'SLC CRIC',

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
    },
  };

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  loginStatus = { isLoggedIn: false };

  constructor(private getLiveScoresService: GetLiveScoresService) {
    this.setScorecard('test_match_1');
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scorecard> | Observable<Observable<Scorecard>> | Promise<Observable<Scorecard>> {
    throw new Error('Method not implemented.');
  }

  ngOninit() {
    this.setScorecard('test_match_1');
  }

  getScorecard(): Observable<Scorecard> {
    const scorecard = of(this.scoreCard);
    return scorecard;
  }
  getSummary(): Observable<TeamScore> {
    this.setScorecard('test_match_1');
    console.log(this.scoreCard);
    this.setScorecard('test_match_1');
    console.log(this.scoreCard);
    let teamScore: TeamScore = {
      teamName: this.scoreCard.score_card.summary.teamName,
      bowlingTeam: this.scoreCard.score_card.summary.bowlingTeam,
      totalScore: this.scoreCard.score_card.summary.totalScore,
      wickets: this.scoreCard.score_card.summary.wickets,
      inning: this.scoreCard.score_card.summary.inning,
      currentOver: this.scoreCard.score_card.current_over.currentOver,
      overBallsBowled: 6 - this.scoreCard.score_card.current_over.ballsLeft,
      totalOvers: this.scoreCard.score_card.meta.totalOvers,
      date: this.scoreCard.date,
      tournamentName: this.scoreCard.score_card.meta.tName,
    };

    console.log(teamScore);
    const score = of(teamScore);
    return score;
  }

  setScorecard(matchid: string) {
    this.getLiveScoresService.getScoreCard().subscribe((s) => {
      this.scoreCard.score_card = JSON.parse(s.scorecard);
      this.scoreCard.created_at = s.created_at;
      this.scoreCard.date = s.date;
      this.scoreCard.match_id = s.match_id;
      this.scoreCard.team_one = s.team_one;
      this.scoreCard.team_two = s.team_two;
      this.scoreCard.description = s.description;
      this.scoreCard.updated_at = s.updated_at;
    });
  }

  getCurrentBatsman(): Observable<any> {
    let batsmen: CurrentPlayers = this.scoreCard.score_card.current_players;

    const score = of(batsmen);
    return score;
  }

  // getBattingTeam(): any {
  //   return {
  //     batters: this.scoreCard.scorecard.innings.batting,
  //     bowlers: this.scoreCard.scorecard.innings.bowling,
  //   };
  // }

  getIningDetails(): Observable<any> {
    const playerScores = of(this.scoreCard.score_card);
    return playerScores;
  }

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
