import { TestMatchScorerService } from './../../../../../scorer-view/services/updated-scorer-service.service';
import { Component, Input, OnInit } from '@angular/core';

import {
  MatchSummary,
  ResumeScoringService,
} from 'src/app/scorer-view/services/resume-scoring.service';

@Component({
  selector: 'crx-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  @Input() data: MatchSummary = {
    date: '',
    match_id: '',
    team_one: '',
    team_two: '',
  };

  constructor(
    private resumeScoringService: ResumeScoringService,
    private testMatchScorerService: TestMatchScorerService
  ) {}

  ngOnInit(): void {}

  resumeScoring() {
    this.resumeScoringService.getResumeCardFromApi(this.data.match_id);
    this.testMatchScorerService.getScores(this.data.match_id.replace('r_', ''));

    console.log('id', this.data.match_id.replace('r_', ''));
  }
}
