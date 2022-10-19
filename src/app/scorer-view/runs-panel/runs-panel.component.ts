import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'crx-runs-panel',
  templateUrl: './runs-panel.component.html',
  styleUrls: ['./runs-panel.component.scss'],
})
export class RunsPanelComponent implements OnInit {
  run: number = 0;
  toppings = this._formBuilder.group({
    WD: false,
    NB: false,
    B: false,
    LB: false,
  });

  wicket: Wicket[] = [
    { value: 'B', viewValue: 'Bowled' },
    { value: 'C', viewValue: 'Caught' },
    { value: 'S', viewValue: 'Stumped' },
    { value: 'ROS', viewValue: 'Run-out Striker' },
    { value: 'RON', viewValue: 'Run-out Non-striker' },
    { value: 'HW', viewValue: 'Hit-wicket' },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  changeRun(run: number) {
    this.run = run;
  }
}

interface Wicket {
  value: string;
  viewValue: string;
}
