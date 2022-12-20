import { ScoreCard } from './../../../../scorer-view/services/score-card';
import { Component, OnInit } from '@angular/core';
import { LiveGameTsService } from '../../services/live-game.ts.service';

@Component({
  selector: 'crx-live-score-home',
  templateUrl: './live-score-home.component.html',
  styleUrls: ['./live-score-home.component.scss'],
})
export class LiveScoreHomeComponent implements OnInit {
  // scoreCard = this.liveGameTsService.getMatch('test_1999');

  constructor(private liveGameTsService: LiveGameTsService) {}

  getScorecard() {


    
  }

  ngOnInit(): void {}
}
