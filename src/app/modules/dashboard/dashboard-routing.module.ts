import { LiveScoreHomeComponent } from './../live-scores/components/live-score-home/live-score-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorerViewComponent } from 'src/app/scorer-view/scorer-view.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { DashResTestComponent } from './components/dash-res-test/dash-res-test.component';

const routes: Routes = [
  {
    path: '',
    component: DashHomeComponent,
    children: [
      { path: 'scorer', component: ScorerViewComponent },
      { path: 'start', component: DashResTestComponent },
      { path: '', redirectTo: 'start', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
