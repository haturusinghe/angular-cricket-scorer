import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLiveComponent } from './components/get-live/get-live.component';
import { LiveScoreHomeComponent } from './components/live-score-home/live-score-home.component';

const routes: Routes = [
  {
    path: '',
    component: GetLiveComponent,
    children: [{ path: 'live', component: LiveScoreHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveScoresRoutingModule {}
