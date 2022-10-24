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

@Component({
  selector: 'crx-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss'],
})
export class PreGameComponent implements OnInit {
  // @Output('newGame') newGame: EventEmitter<any> = new EventEmitter();

  teams!: Team[];
  selectedValue1!: string;
  selectedValue2!: string;

  teamx!: Player[];
  teamy!: Player[];
  next: boolean = false;
  toss!: string;
  role!: string;

  startGame: boolean = false;

  playingTeams: Team[] = [
    {
      teamName: 'SL',
      players: [{ id: 5, first_name: 'Lanna', last_name: 'Smead' }],
    },
    {
      teamName: 'ind',
      players: [{ id: 5, first_name: 'sss', last_name: 'Smead' }],
    },
  ];

  playingXi!: Team[];

  ngOnInit(): void {
    this.getAllTeams();
    this.getPlayingTeams();
    this.getPlayingTeamXi();
    this.setToss();
    this.setRole();
    this.gameStart();
  }

  gameStart(): void {
    this.preGameDataService.start().subscribe((s) => (this.startGame = s));
  }

  getAllTeams(): void {
    this.preGameDataService.getAllTeams().subscribe((s) => (this.teams = s));
  }
  getPlayingTeams(): void {
    this.preGameDataService
      .getPlayingTeams()
      .subscribe((s) => (this.playingTeams = s));
  }
  getPlayingTeamXi(): void {
    this.preGameDataService
      .getPlayingTeamXi()
      .subscribe((s) => (this.playingXi = s));
  }

  setToss() {
    this.preGameDataService.selectToss(this.toss);
  }
  setRole() {
    this.preGameDataService.TossSelect(this.role);
  }
  onChange(teamName: string, n: number): void {
    this.teams.forEach((team) => {
      if (teamName == team.teamName) {
        this.preGameDataService.clearPlayingTeams(n);
        this.preGameDataService.addPlayingTeams(team, n);
      }
    });
  }

  selectPlayingXi(n: number): void {
    this.playingXi[n].teamName = this.playingTeams[n].teamName;

    this.playingXi[n].players = this.playingTeams[n].players.filter(
      (x: Player) => x.checked == true
    );

    this.preGameDataService.clearPlayingTeamsXi(n);
    this.preGameDataService.addPlayingXi(this.playingTeams[n], n);
    this.getPlayingTeamXi();
    this.teamValid(this.playingXi);
  }

  teamValid(team: Team[]): void {
    if (team[0].players.length != 11 || team[1].players.length != 11) {
      this.next = false;
    } else this.next = true;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private preGameDataService: PreGameDataService
  ) {}

  newGames() {
    this.preGameDataService.setStart(true);
    this.startGame = true;
  }

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
