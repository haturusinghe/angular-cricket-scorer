import { PlayingTeam } from './../i/playingTeam';
import { TeamDetails } from './../i/teamDetails';
import { Player } from './../i/player';
// import { GameDetailsService } from './../game-details.service';
// import { team } from './../teams/team';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// import { Teams } from '../teams/mockTeam';
// import { player } from '../teams/player';
import { elementAt } from 'rxjs';

import { Team } from '../i/team';
// import { game } from '../game';
import { PreGameDataService } from '../services/pre-game-data.service';
import { TeamDataService } from '../services/team-data.service';

import { TeamResponse } from '../i/teamResponse';
import { AuthComponent } from 'src/app/auth/auth.component';
import { Cricketer } from '../i/cricketer';
import { MatchDataServiceService } from '../services/match-data-service.service';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatchMetaDataService } from 'src/app/shared/services/match-meta-data.service';

@Component({
  selector: 'crx-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss'],
})
export class PreGameComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private preGameDataService: PreGameDataService,
    private matchDataService: MatchDataServiceService,
    private teamDataService: TeamDataService,
    private matchMetaService: MatchMetaDataService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  stepperOrientation: Observable<StepperOrientation>;

  @Output() preGameCloseEvent = new EventEmitter<boolean>();

  @Output('stepperClosed') setstepperClosed: EventEmitter<any> =
    new EventEmitter();

  matchMetaData = {
    match_id: '',
    tournamentName: '',
    overs: 0,
    teamA: {
      teamId: 0,
      teamName: '',
      allPlayers: new Array<Cricketer>(),
      selectedPlayers: new Array<Cricketer>(),
      tossWon: false,
      tossChoice: 'Batting',
    },
    teamB: {
      teamId: 0,
      teamName: '',
      allPlayers: new Array<Cricketer>(),
      selectedPlayers: new Array<Cricketer>(),
      tossWon: false,
      tossChoice: 'Batting',
    },
  };

  isTest = false;

  selectedFormat: string = '';
  formats: string[] = ['ODI', 'Test Match'];

  tournamentName: string = '';
  totalOvers: string = '';
  nextChk: boolean = false;

  onToggle() {
    if (this.isTest) {
      this.overSelect = 0;
      this.nextChk = true;
    } else {
      this.overSelect = -1;
      this.nextChk = false;
    }
  }

  changeOvers() {
    this.overSelect = parseInt(this.totalOvers);
    if (this.overSelect == NaN) {
      this.overSelect = -1;
      this.nextChk = false;
    } else {
      this.nextChk = true;
    }
    console.log(this.overSelect);
  }

  teams!: Team[];
  teamDetails: TeamResponse = {
    success: '',
    teams: [],
  };
  selectedTeamA!: string;
  selectedTeamB!: string;

  teamWonToss!: string;

  overs: number[] = [3, 5, 10, 20, 50];
  overSelect!: number;

  next: boolean = true;
  tossWonBy!: string;
  tossWinnerDecision!: string;

  stepperClosed = { isOn: false };

  playingTeams: PlayingTeam[] = [
    {
      success: '',
      team: {
        id: 12,
        members_count: 0,
        matches: 0,
        wins: 0,
        losts: 0,
        draws: 0,
        name: 'SACK 2nd XI',
        logo: '',
        description: '',
        slogan: '',
        created_at: '2021-08-23 00:42:26',
        updated_at: '2021-08-23 00:42:26',
      },
      players: [
        {
          id: 102220043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },

        {
          id: 45,
          name: 'Player2 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player3 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 102220043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },

        {
          id: 45,
          name: 'Player2 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player3 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 102220043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },

        {
          id: 45,
          name: 'Player2 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player3 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 102220043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },

        {
          id: 45,
          name: 'Player2 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player3 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 102220043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },

        {
          id: 45,
          name: 'Player2 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player3 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
      ],
    },
    {
      success: '',
      team: {
        id: 10,
        members_count: 0,
        matches: 0,
        wins: 0,
        losts: 0,
        draws: 0,
        name: 'SACK 1st XI',
        logo: '',
        description: '',
        slogan: '',
        created_at: '2021-08-23 00:42:26',
        updated_at: '2021-08-23 00:42:26',
      },
      players: [
        {
          id: 100043,
          name: 'Test new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 44,
          name: 'Player12 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 45,
          name: 'Player22 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
        {
          id: 46,
          name: 'Player32 new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
      ],
    },
  ];

  playingTeamsXi: Team[] = [];
  player: Player = { name: '', id: 1 };
  /*  team1: Team = { teamName: '', players: [this.player, this.player] };
  team2: Team = { teamName: '', players: [this.player, this.player] }; */

  selectedElevenOfTeams: PlayingTeam[] = [
    {
      success: '',
      team: {
        id: 10,
        members_count: 0,
        matches: 0,
        wins: 0,
        losts: 0,
        draws: 0,
        name: 'SACK 1st XI',
        logo: '',
        description: '',
        slogan: '',
        created_at: '2021-08-23 00:42:26',
        updated_at: '2021-08-23 00:42:26',
      },
      players: [
        {
          id: 100043,
          name: 'Danika new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
      ],
    },

    {
      success: '',
      team: {
        id: 11,
        members_count: 0,
        matches: 0,
        wins: 0,
        losts: 0,
        draws: 0,
        name: 'SACK 2nd XI',
        logo: '',
        description: '',
        slogan: '',
        created_at: '2021-08-23 00:42:26',
        updated_at: '2021-08-23 00:42:26',
      },
      players: [
        {
          id: 1010043,
          name: 'Dani2112ka new',
          photo: 'storage/images/99/player-100043.jpg?v=1645731158',
          user_id: 99,
          date_of_birth: '2017-01-01',
          batting_type: 'Right-Handed Batsman',
          bowling_type: '',
        },
      ],
    },
  ];
  Id1!: number;
  id2!: number;

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams(): void {
    this.teamDataService.getTeams().subscribe((s) => (this.teamDetails = s));
  }

  getTeamDetails() {
    return this.teamDetails.teams;
  }

  setMetaData() {
    this.matchMetaData.tournamentName = this.tournamentName;
    this.matchMetaData.overs = this.overSelect;

    this.matchMetaData.teamA.teamId = this.playingTeams[0].team.id;
    this.matchMetaData.teamA.teamName = this.playingTeams[0].team.name;
    this.matchMetaData.teamA.allPlayers = this.playingTeams[0].players;
    this.matchMetaData.teamA.selectedPlayers =
      this.selectedElevenOfTeams[0].players;

    this.matchMetaData.teamB.teamId = this.playingTeams[1].team.id;
    this.matchMetaData.teamB.teamName = this.playingTeams[1].team.name;
    this.matchMetaData.teamB.allPlayers = this.playingTeams[1].players;
    this.matchMetaData.teamB.selectedPlayers =
      this.selectedElevenOfTeams[1].players;
  }

  onTeamSelectedChange(selectedName: string, n: number): void {
    this.teamDetails.teams.forEach((team) => {
      if (team.name.trim() == selectedName.trim()) {
        this.teamDataService.getPlayingTeamById(team.id).subscribe((s) => {
          this.playingTeams[n] = s; // playingTeams is an array of size 2 , containing players of TeamA and TeamB which is selected
          // console.log(s);
        });
      }
    });
  }

  startScoring() {
    this.matchMetaData.match_id = this.generateMatchId(
      this.matchMetaData.teamA.teamName,
      this.matchMetaData.teamB.teamName
    );

    // this.matchMetaData.match_id = 'test_match_x';

    if (this.tossWonBy == 'teamA') {
      this.matchMetaData.teamA.tossWon = true;
      this.matchMetaData.teamA.tossChoice = this.tossWinnerDecision;

      this.matchMetaData.teamB.tossWon = false;
      this.matchMetaData.teamB.tossChoice =
        this.tossWinnerDecision == 'Batting' ? 'Bowling' : 'Batting';
    } else if (this.tossWonBy == 'teamB') {
      this.matchMetaData.teamB.tossWon = true;
      this.matchMetaData.teamB.tossChoice = this.tossWinnerDecision;

      this.matchMetaData.teamA.tossWon = false;
      this.matchMetaData.teamA.tossChoice =
        this.tossWinnerDecision == 'Batting' ? 'Bowling' : 'Batting';
    }

    // console.log(this.matchMetaData);

    this.preGameDataService.setStart(true);
    this.preGameDataService.setMatchMetaData(this.matchMetaData);

    this.stepperClosed.isOn = true;
    this.matchDataService.loadPreGameDataFromService();

    this.matchMetaService.startScoringNewMatch();
    this.showPreGameComp(false);
  }

  showPreGameComp(val: boolean) {
    this.preGameCloseEvent.emit(false);
  }

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  /* HELPER FUNCTIONS FOR SCORECARD GENERATOR */
  generateKey(teamName: string): string {
    return teamName
      .split('')
      .map((char) => char.charCodeAt(0))
      .reduce((acc, charCode) => acc + charCode, 0)
      .toString(36)
      .substring(0, 3);
  }
  /*   generateDateHash(input: string = new Date().toLocaleString()): string {
      const hash = crypto.createHash('sha256');
      hash.update(input);
      return hash.digest('hex').substring(0, 6);
    } */

  getDateCode(date: string): string {
    // Split the date string into its individual components
    const dateComponents = date.split('/');

    // Extract the month, day, and year
    const month = dateComponents[0];
    const day = dateComponents[1];
    const year = dateComponents[2];

    // Return the date code in the format "MMDDYY"
    return month + day + year.slice(-2);
  }

  generateMatchId(teamA: string, teamB: string): string {
    let date_code = this.getDateCode(new Date().toLocaleDateString());
    const id = sessionStorage.getItem('user_id');
    let code =
      this.generateKey(teamA) +
      '_' +
      this.generateKey(teamB) +
      '_' +
      date_code +
      '_' +
      id;
    return code;
  }
}
