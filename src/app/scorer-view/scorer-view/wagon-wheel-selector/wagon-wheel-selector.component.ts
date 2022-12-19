import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { MatchDataServiceService } from '../services/match-data-service.service';
@Component({
  selector: 'crx-wagon-wheel-selector',
  templateUrl: './wagon-wheel-selector.component.html',
  styleUrls: ['./wagon-wheel-selector.component.scss'],
})
export class WagonWheelSelectorComponent implements OnInit {
  linePosX: number = 20;
  linePosY: number = 60;
  sliderProps = {};
  shotAngle: number = 0;
  options: Options = {
    floor: 0,
    ceil: 360,
  };
  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {}

  handleSliderChange(event: any) {
    const dy = event.offsetY - event.target.clientHeight / 2;
    const dx = event.offsetX - event.target.clientWidth / 2;
    let theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI; // rads to degs
    this.shotAngle = Math.floor((theta + 360 + 90) % 360);
    this.matchDataService.changeLastShotAngle(this.shotAngle);
    console.log(this.shotAngle);
  }

  sliderEvent() {
    this.matchDataService.changeLastShotAngle(this.shotAngle);
    console.log(this.shotAngle);
  }
}
