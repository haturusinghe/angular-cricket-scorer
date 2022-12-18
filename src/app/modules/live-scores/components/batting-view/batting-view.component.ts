import { BatterScore } from './../../../../scorer-view/i/player-score';
import { Component, OnInit } from '@angular/core';
import { LiveGameTsService } from '../../services/live-game.ts.service';

@Component({
  selector: 'crx-batting-view',
  templateUrl: './batting-view.component.html',
  styleUrls: ['./batting-view.component.scss'],
})
export class BattingViewComponent implements OnInit {
  batsmen!: BatterScore[];

  // getCurrentBatsmen(): void {
  //   this.liveGameTsService
  //     .getCurrentBatsman()
  //     .subscribe((s) => (this.batsmen = s));
  // }

  constructor(private liveGameTsService: LiveGameTsService) {}

  ngOnInit(): void {
    // this.getCurrentBatsmen();
  }
}
