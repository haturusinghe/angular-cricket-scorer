import { Router } from '@angular/router';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-get-live',
  templateUrl: './get-live.component.html',
  styleUrls: ['./get-live.component.scss'],
})
export class GetLiveComponent implements OnInit {
  start = 1;
  constructor(
    private liveGameTsService: LiveGameTsService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  newMatch() {
    this.start = 0;
    this.liveGameTsService.setScorecard('test_match_2');
    this.liveGameTsService.resumeScoringSession();

    this.router.navigate(['live-scores/live']);
  }
}
