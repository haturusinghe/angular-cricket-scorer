import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatchDataServiceService } from '../services/match-data-service.service';
@Component({
  selector: 'crx-runs-panel',
  templateUrl: './runs-panel.component.html',
  styleUrls: ['./runs-panel.component.scss'],
})
export class RunsPanelComponent implements OnInit {
  selectedRun: string = '0';
  run: number = 0;
  isWicket: boolean = false;

  extrasToSend: Set<string> = new Set();

  extraVals: Extra[] = [
    { name: 'Wide', value: 'WD', isOn: false },
    { name: 'No Ball', value: 'NB', isOn: false },
  ];

  extraValsBys: Extra[] = [
    { name: 'Bye', value: 'By', isOn: false },
    { name: 'Leg Bye', value: 'LBy', isOn: false },
  ];

  wicketVals: Wicket[] = [
    { value: 'B', viewValue: 'Bowled' },
    { value: 'C', viewValue: 'Caught' },
    { value: 'S', viewValue: 'Stumped' },
    { value: 'ROS', viewValue: 'Run-out Striker' },
    { value: 'RON', viewValue: 'Run-out Non-striker' },
    { value: 'HW', viewValue: 'Hit-wicket' },
  ];

  wicketControl = new FormControl(this.wicketVals[0].value);

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {}

  changeRun(run: string) {
    this.run = parseInt(run);
  }

  onClick() {
    this.matchDataService.recordBall({
      runs: this.run,
      is4: this.run == 4,
      is6: this.run == 6,
      extras: Array.from(this.extrasToSend),
      Out: {
        isOut: this.isWicket,
        type: this.isWicket ? this.wicketControl.value?.toString() : '',
      },
    });
  }

  resetPanel() {
    this.extrasToSend.clear();
    this.extraVals.forEach((e) => {
      e.isOn = false;
    });
    this.extraValsBys.forEach((e) => {
      e.isOn = false;
    });
    this.selectedRun = '0';
    this.isWicket = false;
  }

  setWicketStatus() {
    this.isWicket = !this.isWicket;
  }

  updateExtraValues(val: Extra) {
    if (val.value == 'WD' && val.isOn) {
      this.extraVals[1].isOn = false;
    }

    if (val.value == 'NB' && val.isOn) {
      this.extraVals[0].isOn = false;
    }

    if (val.value == 'By' && val.isOn) {
      this.extraValsBys[1].isOn = false;
    }

    if (val.value == 'LBy' && val.isOn) {
      this.extraValsBys[0].isOn = false;
    }

    this.extrasToSend.clear();
    this.extraVals.forEach((e) => {
      if (e.isOn) {
        this.extrasToSend.add(e.value);
      }
    });
    this.extraValsBys.forEach((e) => {
      if (e.isOn) {
        this.extrasToSend.add(e.value);
      }
    });

    console.log(this.extrasToSend);
  }
}

interface Wicket {
  value: string;
  viewValue: string;
}

export interface Extra {
  name: string;
  value: string;
  isOn: boolean;
}
