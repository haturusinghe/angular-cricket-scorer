import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveScoresRoutingModule } from './live-scores-routing.module';
import { LiveScoreHomeComponent } from './components/live-score-home/live-score-home.component';
import { MatchSummaryComponent } from './components/match-summary/match-summary.component';
import { MaterialExampleModule } from 'src/environments/meterial.module';
import { BattingViewComponent } from './components/batting-view/batting-view.component';
import { BattingPanelComponent } from './components/batting-panel/batting-panel.component';
import { BowlingPanelComponent } from './components/bowling-panel/bowling-panel.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    BattingPanelComponent,
    LiveScoreHomeComponent,
    MatchSummaryComponent,
    BattingViewComponent,
    BattingPanelComponent,
    BowlingPanelComponent,
  ],
  imports: [
    CommonModule,
    LiveScoresRoutingModule,
    MaterialExampleModule,
    FlexLayoutModule,
  ],
})
export class LiveScoresModule {}
