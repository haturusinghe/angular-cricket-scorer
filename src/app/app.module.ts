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

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './scorer-view/toolbar/toolbar.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
import { PreGameComponent } from './scorer-view/pre-game/pre-game.component';
import { TeamsComponent } from './scorer-view/pre-game/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ScorerViewComponent,
    ToolbarComponent,
    RunsPanelComponent,
    BatterPanelComponent,
    WagonWheelSelectorComponent,
    BowlerPanelComponent,
    MatchSummaryComponent,
    TeamScoresComponent,
    ByBallComponent,
    OverCardComponent,
    ChangeBatsmanComponent,
    ChangeBowlerComponent,
    PreGameComponent,
    TeamsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FlexLayoutModule,
    NgxSliderModule,

    HttpClientModule,
    MatNativeDateModule,

    MatInputModule,
    MatFormFieldModule,

    MatButtonModule,

    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
