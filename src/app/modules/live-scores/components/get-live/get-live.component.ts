import { Router } from '@angular/router';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-get-live',
  templateUrl: './get-live.component.html',
  styleUrls: ['./get-live.component.scss'],
})
export class GetLiveComponent implements OnInit {
  constructor(
    private liveGameTsService: LiveGameTsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newMatch() {
    this.liveGameTsService.setScorecard('test_match_2');

    this.router.navigate(['live-scores/live']);
  }
}
