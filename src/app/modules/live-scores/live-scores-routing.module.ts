import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLiveComponent } from './components/get-live/get-live.component';
import { LiveScoreHomeComponent } from './components/live-score-home/live-score-home.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'live', component: LiveScoreHomeComponent },
      { path: 'start', component: GetLiveComponent },
      { path: '', redirectTo: 'start', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveScoresRoutingModule {}
