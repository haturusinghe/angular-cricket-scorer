import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'crx-runs-panel',
  templateUrl: './runs-panel.component.html',
  styleUrls: ['./runs-panel.component.scss'],
})
export class RunsPanelComponent implements OnInit {
  run: number = 0;
  extras = {
    WD: false,
    NB: false,
    LB: false,
    B: false,
    P: false,
  };
  boundry = {
    runs: 0,
    distance: 0,
  };

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  changeRun(run: number) {
    this.run = run;
  }
  changeBoundry(runs: number) {
    if (this.boundry.runs == runs) {
      this.boundry.runs = 0;
    } else {
      this.boundry.runs = runs;
    }
  }

  changeExtras(type: string) {
    /*     if (this.extras[type] == true) {
      this.extras[type] = false;
    } else {
      this.extras[type] = true;
      if (type == 'WD') {
        this.extras['NB'] = false;
      } else if (type == 'B') {
        this.extras['LB'] = false;
        this.extras['WD'] = false;
      } else if (type == 'LB') {
        this.extras['B'] = false;
        this.extras['WD'] = false;
      } else if (type == 'NB') {
        this.extras['WD'] = false;
      }
    } */
  }
}
