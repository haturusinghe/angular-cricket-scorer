import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'crx-runs-panel',
  templateUrl: './runs-panel.component.html',
  styleUrls: ['./runs-panel.component.scss'],
})
export class RunsPanelComponent implements OnInit {
  run: number = 0;
  extras = this._formBuilder.group({
    WD: false,
    NB: false,
    B: false,
    LB: false,
  });
  isWicket: boolean = false;

  wicket: Wicket[] = [
    { value: 'B', viewValue: 'Bowled' },
    { value: 'C', viewValue: 'Caught' },
    { value: 'S', viewValue: 'Stumped' },
    { value: 'ROS', viewValue: 'Run-out Striker' },
    { value: 'RON', viewValue: 'Run-out Non-striker' },
    { value: 'HW', viewValue: 'Hit-wicket' },
  ];

  wicketControl = new FormControl(this.wicket[0].value);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  changeRun(run: string) {
    this.run = parseInt(run);
  }

  onClick() {
    console.log(this.run);
    console.log(this.extras.value);
    if (this.isWicket) {
      console.log(this.wicketControl.value);
    }
  }

  setWicketStatus() {
    this.isWicket = !this.isWicket;
  }
}

interface Wicket {
  value: string;
  viewValue: string;
}
