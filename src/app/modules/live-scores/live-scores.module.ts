import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveScoresRoutingModule } from './live-scores-routing.module';
import { LiveScoreHomeComponent } from './components/live-score-home/live-score-home.component';


@NgModule({
  declarations: [
    LiveScoreHomeComponent
  ],
  imports: [
    CommonModule,
    LiveScoresRoutingModule
  ]
})
export class LiveScoresModule { }
