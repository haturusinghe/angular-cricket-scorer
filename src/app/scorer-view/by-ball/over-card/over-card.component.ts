import { Component, OnInit, Input } from '@angular/core';
import { Ball } from '../../i/ball';
import { Over } from '../../i/over';
import { OverData } from '../../i/over-data';
import { BatterScore } from '../../i/player-score';

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

  getTotalRuns(balls: Ball[]) {
    let totalRuns = 0;
    balls.forEach((b) => {
      totalRuns += b.runs;
    });
    return totalRuns;
  }

  getPlayerName(p: any) {
    let name = 'N/A';
    if (p) {
      name = p.player.name ;
    }
    return name;
  }
  getPlayerRB(p: any) {
    let stat = 'N/A';
    if (p) {
      stat = 'Runs: ' + p.runs + '\t Balls: ' + p.ballsFaced + '';
    }
    return stat;
  }

  getExtraScore(balls: Ball[]) {
    let extraScore: number = 0;
    balls.forEach((b) => {
      if (b.extras.includes('WD') || b.extras.includes('NB')) {
        extraScore++;
      }
    });
    return extraScore;
  }
}
