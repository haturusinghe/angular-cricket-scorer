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

@Component({
  selector: 'crx-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss'],
})
export class PreGameComponent implements OnInit {
  @Output('stepperClosed') setstepperClosed: EventEmitter<any> =
    new EventEmitter();

  tournaments = [{ name: 'Ashes' }, { name: 'Nidahas Trophy' }];
  tournament: string = '';

  teams!: Team[];
  teamDetails: TeamResponse = {
    success: '',
    teams: [],
  };
  selectedValue1!: string;
  selectedValue2!: string;

  overs: number[] = [3, 10, 20, 50];
  overSelect!: number;

  teamx!: Player[];
  teamy!: Player[];
  next: boolean = true;
  toss!: string;
  role!: string;

  stepperClosed = { isOn: false };

  // playingTeams: Team[] = [
  //   {
  //     teamName: 'SL',
  //     players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
  //   },
  //   {
  //     teamName: 'ind',
  //     players: [{ id: 5, first_name: 'sss', last_name: 'Smead' }],
  //   },
  // ];
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
  player: Player = { first_name: '', last_name: '', id: 1 };
  team1: Team = { teamName: '', players: [this.player, this.player] };
  team2: Team = { teamName: '', players: [this.player, this.player] };

  clearTeam(team: Team) {
    team.players = [];
  }
  getTeamsXi() {
    this.team1.teamName = this.playingXi[0].team.name;
    this.clearTeam(this.team1);
    this.playingXi[0].players.forEach((player) => {
      this.team1.players.push({
        first_name: player.name,
        id: player.id,
        last_name: '',
      });
    });

    this.playingTeamsXi.push(this.team1);
    this.clearTeam(this.team2);
    this.team2.teamName = this.playingXi[1].team.name;

    this.playingXi[1].players.forEach((player) => {
      this.team2.players.push({
        first_name: player.name,
        id: player.id,
        last_name: '',
      });
    });

    this.playingTeamsXi.push(this.team2);

    console.log(this.playingXi);
    this.setPlayingXi();
  }
  playingXi: PlayingTeam[] = [
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
    // this.getPlayingTeams();
    // this.getPlayingTeamXi();
    this.setToss();
    this.setRole();
    this.setOvers();
    this.setTournament();
  }

  getAllTeams(): void {
    this.teamDataService.getTeams().subscribe((s) => (this.teamDetails = s));
    console.log(this.teamDetails);
  }

  getTeamDetails() {
    return this.teamDetails.teams;
  }

  // getPlayingTeams(): void {
  //   this.preGameDataService
  //     .getPlayingTeams()
  //     .subscribe((s) => (this.playingTeams = s));
  // }
  getPlayingTeamXi(): void {
    this.preGameDataService
      .getPlayingTeamXi()
      .subscribe((s) => (this.playingTeamsXi = s));
  }

  setPlayingXi() {
    this.preGameDataService.setTeamXi(this.playingTeamsXi);
  }
  setToss() {
    this.preGameDataService.selectToss(this.toss);
  }
  setRole() {
    this.preGameDataService.TossSelect(this.role);
  }
  setOvers() {
    this.preGameDataService.selectOvers(this.overSelect);
  }

  setTournament() {
    this.preGameDataService.selectTournament(this.tournament);
    console.log(this.teamDetails);
  }

  onChange(selectedName: string, n: number): void {
    // console.log(selectedName, n);
    this.teamDetails.teams.forEach((team) => {
      if (team.name.trim() == selectedName.trim()) {
        this.teamDataService.getPlayingTeamById(team.id).subscribe((s) => {
          this.playingTeams[n] = s;
          console.log(s);
        });
      }
      // console.log(this.playingTeams[n]);
    });
  }

  selectPlayingXi(n: number): void {
    // this.playingXi[n].team.name = this.playingTeams[n].team.name;
    // this.preGameDataService.clearPlayingTeamsXi(n);
    // this.preGameDataService.addPlayingXi(this.playingTeamsXi[n], n);
    // this.getPlayingTeamXi();
    // this.teamValid(this.playingXi);
  }

  teamValid(team: TeamDetails[]): void {
    // if (team[0].players.length != 11 || team[1].players.length != 11) {
    //   this.next = false;
    // } else this.next = true;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private preGameDataService: PreGameDataService,
    private authServiceService: AuthComponent,
    private teamDataService: TeamDataService
  ) {}

  newGames() {
    this.preGameDataService.setStart(true);
    this.getTeamsXi();
    this.teamDataService
      .getPlayingTeamById(12)
      .subscribe((s) => (this.playingTeams[0] = s));
    console.log(this.preGameDataService.getPreGameData());
    this.stepperClosed.isOn = true;
  }

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
