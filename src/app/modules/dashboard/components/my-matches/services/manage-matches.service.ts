import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AllMatchesList,
  MatchSummary,
} from 'src/app/scorer-view/services/resume-scoring.service';
import { MatchesDataService } from './matches-data.service';

@Injectable({
  providedIn: 'root',
})
export class ManageMatchesService {
  allMatches: AllMatchesList[] = [];
  summaryList: MatchSummary[] = [];

  constructor(private matchesDataService: MatchesDataService) {
    // this.getMatchesList();
  }

  getMatchesList(): void {
    this.summaryList = [];
    this.matchesDataService.getMatches().subscribe((s) => {
      this.allMatches = s.data;
      this.allMatches.forEach((m) => {
        try {
          let description = JSON.parse(m.description);
          console.log(description);
        } catch (error) {}
        this.summaryList.push({
          team_one: m.team_one,
          team_two: m.team_two,
          date: m.date,
          match_id: m.match_id,
        });
      });
    });
  }

  getMatchSummaryList(): Observable<MatchSummary[]> {
    const summaryList = of(this.summaryList);
    return summaryList;
  }
}
