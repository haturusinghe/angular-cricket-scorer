import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorerViewComponent } from './scorer-view/scorer-view.component';

const routes: Routes = [{ path: 'score', component: ScorerViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
