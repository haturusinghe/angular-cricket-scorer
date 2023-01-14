import { Component, Input, OnInit } from '@angular/core';
import { MatchSummary } from 'src/app/scorer-view/services/resume-scoring.service';

@Component({
  selector: 'crx-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  teamA = 'Team A';
  teamB = 'Team B';
  date = 'DD/MM/YYYY';

  @Input() data: MatchSummary = {
    date: '',
    match_id: '',
    team_one: '',
    team_two: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
