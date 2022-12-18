import { BowlerScore } from './../../../../scorer-view/i/bowler-score';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';
import { BatterScore } from 'src/app/scorer-view/i/player-score';
import { PostScore } from 'src/app/scorer-view/i/post-scores';
import { MatchDataServiceService } from 'src/app/scorer-view/services/match-data-service.service';

@Component({
  selector: 'crx-batting-panel',
  templateUrl: './batting-panel.component.html',
  styleUrls: ['./batting-panel.component.scss'],
})
export class BattingPanelComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  scores: BatterScore[] = [];
  bowlingfig: BowlerScore[] = [];
  teamsNames = { batters: '', bowlers: '' };

  constructor(private liveDataService: LiveGameTsService) {
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();
    // this.updateDs();
  }
  // getTeamNames() {
  //   this.teamsNames = this.liveDataService.getBattingTeam();
  // }

  // updateDs() {
  //   this.liveDataService.getPlayerTeamScores().subscribe((s) => {
  //     this.scores = s;
  //   });
  // }

//   updateData() {
//     this.liveDataService.getPlayerBowlingFigures().subscribe((s) => {
//       this.bowlingfig = s;
//     });
//   }
}
