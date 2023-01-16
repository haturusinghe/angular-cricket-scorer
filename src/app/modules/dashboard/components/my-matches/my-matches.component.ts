import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchSummary } from 'src/app/scorer-view/services/resume-scoring.service';
import { MatchMetaDataService } from 'src/app/shared/services/match-meta-data.service';
import { ManageMatchesService } from './services/manage-matches.service';

@Component({
  selector: 'crx-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss'],
})
export class MyMatchesComponent implements OnInit {
  matchList: MatchSummary[] = [];

  constructor(
    private manageMatchesService: ManageMatchesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMatchesList();
  }

  getMatchesList() {
    this.manageMatchesService.getMatchesList();
    this.manageMatchesService.getMatchSummaryList().subscribe((m) => {
      this.matchList = m;
    });
  }

  test() {
    // console.log(this.matchList);
    const local_u = sessionStorage.getItem('user');
    const id = sessionStorage.getItem('user_id');
    let user = '';
    let user_id = '';
    if (local_u) {
      user = JSON.parse(local_u);
    }
    console.log(user);
    console.log(id);
  }

  startNewMatch() {
    sessionStorage.setItem(
      'match_starting_status',
      JSON.stringify({ startingNewMatch: true })
    );

    this.router.navigate(['dashboard/scorer']);
  }
}
