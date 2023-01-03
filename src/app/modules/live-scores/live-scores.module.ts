import { GetLiveScoresService } from './services/get-live-scores.service';

import { MatCardModule } from '@angular/material/card';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveScoresRoutingModule } from './live-scores-routing.module';
import { LiveScoreHomeComponent } from './components/live-score-home/live-score-home.component';
import { MatchSummaryComponent } from './components/match-summary/match-summary.component';
import { MaterialExampleModule } from 'src/environments/meterial.module';
import { BattingViewComponent } from './components/batting-view/batting-view.component';
import { BattingPanelComponent } from './components/batting-panel/batting-panel.component';
import { BowlingPanelComponent } from './components/bowling-panel/bowling-panel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetLiveComponent } from './components/get-live/get-live.component';
import { ByBallComponent } from './components/by-ball/by-ball.component';
import { OverCardComponent } from './components/by-ball/over-card/over-card.component';
import { ContainerComponent } from './components/container/container.component';
import { initializeAppFactory } from './initializer/app.initializer';
import { LiveGameTsService } from './services/live-game.ts.service';

@NgModule({
  declarations: [
    BattingPanelComponent,
    LiveScoreHomeComponent,
    MatchSummaryComponent,
    BattingViewComponent,
    BattingPanelComponent,
    BowlingPanelComponent,
    GetLiveComponent,
    ByBallComponent,
    OverCardComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    LiveScoresRoutingModule,
    MaterialExampleModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [LiveGameTsService],
      multi: true,
    },
  ],
})
export class LiveScoresModule {}
