import { PreGameDataService } from './services/pre-game-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'crx-scorer-view',
  templateUrl: './scorer-view.component.html',
  styleUrls: ['./scorer-view.component.scss'],
})
export class ScorerViewComponent implements OnInit {
  currentStrikerControl = new FormControl('');
  player?: string;
  startGame = { isOn: false };
  constructor(private preGameDataService: PreGameDataService) {}

  ngOnInit(): void {
    this.gameStart();
  }

  gameStart(): void {
    this.preGameDataService.start().subscribe((s) => (this.startGame = s));
  }
  newGame() {
    this.preGameDataService.setStart(true);
  }

  testOne() {
    console.log(this.startGame);
  }
}
