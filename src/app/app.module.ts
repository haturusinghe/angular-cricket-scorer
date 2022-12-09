import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScorerViewComponent } from './scorer-view/scorer-view.component';

//Other
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AngularWebStorageModule } from 'angular-web-storage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Components
import { ToolbarComponent } from './scorer-view/toolbar/toolbar.component';
import { RunsPanelComponent } from './scorer-view/runs-panel/runs-panel.component';
import { BatterPanelComponent } from './scorer-view/batter-panel/batter-panel.component';
import { WagonWheelSelectorComponent } from './scorer-view/wagon-wheel-selector/wagon-wheel-selector.component';
import { BowlerPanelComponent } from './scorer-view/bowler-panel/bowler-panel.component';
import { MatchSummaryComponent } from './scorer-view/match-summary/match-summary.component';
import { TeamScoresComponent } from './scorer-view/team-scores/team-scores.component';
import { ByBallComponent } from './scorer-view/by-ball/by-ball.component';
import { OverCardComponent } from './scorer-view/by-ball/over-card/over-card.component';
import { ChangeBatsmanComponent } from './scorer-view/change-batsman/change-batsman.component';
import { ChangeBowlerComponent } from './scorer-view/change-bowler/change-bowler.component';
import { PlayerScoreCardComponent } from './scorer-view/player-score-card/player-score-card.component';
import { PreGameComponent } from './scorer-view/pre-game/pre-game.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/service/authconfig.interceptor';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LiveScoresComponent } from './live-scores/live-scores/live-scores.component';

//

@NgModule({
  declarations: [
    AppComponent,

    ScorerViewComponent,
    ToolbarComponent,
    RunsPanelComponent,
    BatterPanelComponent,
    WagonWheelSelectorComponent,
    PreGameComponent,
    BowlerPanelComponent,
    MatchSummaryComponent,
    TeamScoresComponent,
    ByBallComponent,
    OverCardComponent,
    ChangeBatsmanComponent,
    ChangeBowlerComponent,
    PlayerScoreCardComponent,
    AuthComponent,
    DashboardComponent,
    LiveScoresComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FlexLayoutModule,
    NgxSliderModule,
    AngularWebStorageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
