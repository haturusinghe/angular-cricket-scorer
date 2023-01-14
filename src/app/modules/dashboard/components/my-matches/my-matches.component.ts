import { Component, OnInit } from '@angular/core';
import { MatchSummary } from 'src/app/scorer-view/services/resume-scoring.service';
import { ManageMatchesService } from './services/manage-matches.service';

@Component({
  selector: 'crx-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss'],
})
export class MyMatchesComponent implements OnInit {
  matchList: MatchSummary[] = [];

  constructor(private manageMatchesService: ManageMatchesService) {}

  ngOnInit(): void {
    this.getMatchesList();
  }

  getMatchesList() {
    this.manageMatchesService.getMatchSummaryList().subscribe((m) => {
      this.matchList = m;
    });
  }

  test() {
    console.log(this.matchList);
  }
}
