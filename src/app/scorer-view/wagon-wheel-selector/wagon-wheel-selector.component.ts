import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'crx-wagon-wheel-selector',
  templateUrl: './wagon-wheel-selector.component.html',
  styleUrls: ['./wagon-wheel-selector.component.scss'],
})
export class WagonWheelSelectorComponent implements OnInit {
  linePosX: number = 20;
  linePosY: number = 60;
  sliderProps = {};
  shotAngle: number = 90;
  options: Options = {
    floor: 0,
    ceil: 360,
  };
  constructor() {}

  ngOnInit(): void {}

  handleSliderChange(event: any) {
    const dy = event.offsetY - event.target.clientHeight / 2;
    const dx = event.offsetX - event.target.clientWidth / 2;
    let theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI; // rads to degs
    this.shotAngle = (theta + 360 + 90) % 360;
  }
}
