import { team } from './../teams/team';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Teams } from '../teams/mockTeam';
import { player } from '../teams/player';
import { elementAt } from 'rxjs';

/**
 * @title Stepper
 */
@Component({
  selector: 'crx-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  team: team[] = Teams;
  selectedValue!: string;

  team1!: team;
  team2: team = this.team[1];

  getPlayers() {
    if (this.selectedValue == 'Srilanka') {
      this.team1 = this.team[0];
    } else {
      this.team1 = this.team[1];
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
