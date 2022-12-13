import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorerViewComponent } from 'src/app/scorer-view/scorer-view.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashHomeComponent,
    children: [
      { path: 'scorer', component: ScorerViewComponent },
      { path: '', redirectTo: 'scorer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
