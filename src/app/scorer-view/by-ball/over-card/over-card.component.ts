import { Component, OnInit, Input } from '@angular/core';
import { Over } from '../../i/over';
import { OverData } from '../../i/over-data';

@Component({
  selector: 'crx-over-card',
  templateUrl: './over-card.component.html',
  styleUrls: ['./over-card.component.scss'],
})
export class OverCardComponent implements OnInit {
  @Input() over: Over = { overNumber: 0, balls: [] };
  @Input() currentOver?: OverData;

  constructor() {}

  ngOnInit(): void {}

  getType(d: any) {
    let match = '';
    let extraVals = [
      { name: 'Wide', value: 'WD', isOn: false },
      { name: 'No Ball', value: 'NB', isOn: false },
    ];

    let extraValsBys = [
      { name: 'Bye', value: 'By', isOn: false },
      { name: 'Leg Bye', value: 'LBy', isOn: false },
    ];

    let wicketVals = [
      { value: 'B', viewValue: 'Bowled' },
      { value: 'C', viewValue: 'Caught' },
      { value: 'S', viewValue: 'Stumped' },
      { value: 'ROS', viewValue: 'Run-out Striker' },
      { value: 'RON', viewValue: 'Run-out Non-striker' },
      { value: 'HW', viewValue: 'Hit-wicket' },
    ];

    extraVals.forEach((v) => {
      if (v.value == d) {
        match = v.name;
      }
    });

    extraValsBys.forEach((v) => {
      if (v.value == d) {
        match = v.name;
      }
    });

    wicketVals.forEach((v) => {
      if (v.value == d) {
        match = v.viewValue;
      }
    });

    return match;
  }
}
