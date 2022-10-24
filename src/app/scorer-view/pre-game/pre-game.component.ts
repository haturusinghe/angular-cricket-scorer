import { Player } from './../i/player';
// import { GameDetailsService } from './../game-details.service';
// import { team } from './../teams/team';
import { Component, OnInit } from '@angular/core';
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
  teams!: Team[];
  selectedValue1!: string;
  selectedValue2!: string;

  teamx!: Player[];
  teamy!: Player[];

  toss!: string;
  role!: string;
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

  playingXi: Team[] = this.playingTeams;

  ngOnInit(): void {
    this.getAllTeams();
    this.getPlayingTeams();
  }

  getAllTeams(): void {
    this.preGameDataService.getAllTeams().subscribe((s) => (this.teams = s));
  }
  getPlayingTeams(): void {
    this.preGameDataService
      .getPlayingTeams()
      .subscribe((s) => (this.playingTeams = s));
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
    this.getPlayingTeams();
  }

  onSubmit(): void {
    this.playingXi[0].teamName = this.playingTeams[0].teamName;
    this.playingXi[0].players = this.playingTeams[0].players.filter(
      (x: Player) => x.checked == true
    );

    this.preGameDataService.setPlayingXi(this.playingXi[0], 0);
    this.playingXi[1].teamName = this.playingTeams[1].teamName;

    this.playingXi[1].players = this.playingTeams[1].players.filter(
      (x: Player) => x.checked == true
    );
    this.preGameDataService.setPlayingXi(this.playingXi[1], 1);
  }

  TeamValid(team: Player[]): boolean {
    if (team.length != 12) {
      return false;
    } else return true;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private preGameDataService: PreGameDataService
  ) {}

  isLinear = false;
  // addToGames(game: game) {
  //   this.gameDetailsService.addToGames(game);
  // }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
