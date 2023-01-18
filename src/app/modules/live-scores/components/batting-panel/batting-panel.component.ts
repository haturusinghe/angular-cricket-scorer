import { map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BowlerScore } from '../../i/i/bowler-score';
import { BatterScore } from '../../i/i/player-score';
import { ScoreCard } from '../../i/i/score-card';
import { GetLiveScoresService } from '../../services/get-live-scores.service';
import { LiveGameTsService } from '../../services/live-game.ts.service';

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
  inning: string = '1st';
  scorecard: ScoreCard = {
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
              name: 'Lahirusssssssaaa Abeysinghe',
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
              name: 'Lahiru Assbeysinghe',
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
              name: 'Induwarssa Galapitage',
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

  constructor(
    private liveDataService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();

    this.updateDs();

    this.getBattingDetails();
    console.log(this.bowlingfig);
    console.log(this.scorecard.innings.a_2.batting);
    console.log(this.scorecard.innings.b_2.batting);
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
        this.scorecard = JSON.parse(s.scorecard);

        this.teamsNames.batters = this.scorecard.summary.teamName;
        this.teamsNames.bowlers = this.scorecard.summary.bowlingTeam;
        this.inning = this.scorecard.summary.inning;

        console.log(this.scorecard);
      });
  }

  getBattingDetails() {
    if (this.inning.trim() == '1st') {
      if (
        this.scorecard.meta.batting.trim() ==
        this.scorecard.innings.a_1.teamName.trim()
      ) {
        this.bowlingfig = this.scorecard.innings.b_1.bowling;
        this.scores = this.scorecard.innings.a_1.batting;
      } else {
        this.scores = this.scorecard.innings.b_1.batting;
        this.bowlingfig = this.scorecard.innings.a_1.bowling;
      }
    } else if (this.inning.trim() == '2nd') {
      if (
        this.scorecard.meta.batting.trim() ==
        this.scorecard.innings.a_2.teamName.trim()
      ) {
        this.scores = this.scorecard.innings.a_2.batting;
        this.bowlingfig = this.scorecard.innings.b_2.bowling;
      } else {
        this.scores = this.scorecard.innings.b_2.batting;
        this.bowlingfig = this.scorecard.innings.a_2.bowling;
      }
    }
  }
}
