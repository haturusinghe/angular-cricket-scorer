import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LiveScoresComponent } from './live-scores/live-scores/live-scores.component';
import { ScorerViewComponent } from './scorer-view/scorer-view.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/scorer', pathMatch: 'full' },

  { path: 'login', component: AuthComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'score-match',
    component: ScorerViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'live-score',
    component: LiveScoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
