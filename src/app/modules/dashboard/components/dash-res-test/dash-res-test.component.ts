import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchDataServiceService } from 'src/app/scorer-view/services/match-data-service.service';
import { PreGameDataService } from 'src/app/scorer-view/services/pre-game-data.service';
import {
  MatchSummary,
  ResumeScoringService,
} from 'src/app/scorer-view/services/resume-scoring.service';

@Component({
  selector: 'crx-dash-res-test',
  templateUrl: './dash-res-test.component.html',
  styleUrls: ['./dash-res-test.component.scss'],
})
export class DashResTestComponent implements OnInit {
  summaryList: MatchSummary[] = [];
  constructor(
    private preGameDataService: PreGameDataService,
    private matchService: MatchDataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resumeMatch() {
    this.preGameDataService.setStart(true);
    this.matchService.resumeScoringSession();
    this.router.navigate(['dashboard/scorer']);
  }

  newMatch() {
    this.router.navigate(['dashboard/scorer']);
  }
}
