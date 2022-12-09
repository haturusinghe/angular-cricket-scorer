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

@Component({
  selector: 'crx-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss'],
})
export class PreGameComponent implements OnInit {
  @Output('stepperClosed') setstepperClosed: EventEmitter<any> =
    new EventEmitter();

  matchMetaData = {
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

  // tournaments = [{ name: 'Ashes' }, { name: 'Nidahas Trophy' }];
  tournamentName: string = '';

  teams!: Team[];
  teamDetails: TeamResponse = {
    success: '',
    teams: [],
  };
  selectedTeamA!: string;
  selectedTeamB!: string;

  teamWonToss!: string;

  overs: number[] = [3, 10, 20, 50];
  overSelect!: number;

  teamx!: Player[];
  teamy!: Player[];
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
  player: Player = { first_name: '', last_name: '', id: 1 };
  team1: Team = { teamName: '', players: [this.player, this.player] };
  team2: Team = { teamName: '', players: [this.player, this.player] };

  clearTeam(team: Team) {
    team.players = [];
  }
  getTeamsXi() {
    this.team1.teamName = this.selectedElevenOfTeams[0].team.name;
    this.clearTeam(this.team1);
    this.selectedElevenOfTeams[0].players.forEach((player) => {
      this.team1.players.push({
        first_name: player.name,
        id: player.id,
        last_name: '',
      });
    });

    this.playingTeamsXi.push(this.team1);
    this.clearTeam(this.team2);
    this.team2.teamName = this.selectedElevenOfTeams[1].team.name;

    this.selectedElevenOfTeams[1].players.forEach((player) => {
      this.team2.players.push({
        first_name: player.name,
        id: player.id,
        last_name: '',
      });
    });

    this.playingTeamsXi.push(this.team2);

    console.log(this.selectedElevenOfTeams);
    this.setPlayingXi();
  }
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
    this.setToss();
    this.setRole();
    this.setOvers();
    this.setTournamentName();
  }

  getAllTeams(): void {
    this.teamDataService.getTeams().subscribe((s) => (this.teamDetails = s));
  }

  getTeamDetails() {
    return this.teamDetails.teams;
  }

  setPlayingXi() {
    this.preGameDataService.setTeamXi(this.playingTeamsXi);
  }
  setToss() {
    this.preGameDataService.selectToss(this.tossWonBy);
  }
  setRole() {
    this.preGameDataService.TossSelect(this.tossWinnerDecision);
  }
  setOvers() {
    this.preGameDataService.selectOvers(this.overSelect);
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

    console.log(this.matchMetaData);
  }

  addTossDataToMeta() {}

  setTournamentName() {
    this.preGameDataService.selectTournament(this.tournamentName);
    console.log(this.teamDetails);
  }

  onTeamSelectedChange(selectedName: string, n: number): void {
    this.teamDetails.teams.forEach((team) => {
      if (team.name.trim() == selectedName.trim()) {
        this.teamDataService.getPlayingTeamById(team.id).subscribe((s) => {
          this.playingTeams[n] = s; // playingTeams is an array of size 2 , containing players of TeamA and TeamB which is selected
          console.log(s);
        });
      }
    });
  }

  constructor(
    private _formBuilder: FormBuilder,
    private preGameDataService: PreGameDataService,
    private teamDataService: TeamDataService
  ) {}

  startScoring() {
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

    console.log(this.matchMetaData);

    this.preGameDataService.setStart(true);
    this.preGameDataService.setMetaData(this.setMetaData);

    // Uncomment this later
    /* this.getTeamsXi();
    this.teamDataService
      .getPlayingTeamById(12)
      .subscribe((s) => (this.playingTeams[0] = s));
    console.log(this.preGameDataService.getPreGameData()); */
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
