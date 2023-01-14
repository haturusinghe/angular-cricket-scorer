import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { MaterialExampleModule } from '../../../material.module';
import { DashResTestComponent } from './components/dash-res-test/dash-res-test.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { MatchCardComponent } from './components/my-matches/match-card/match-card.component';

@NgModule({
  declarations: [DashHomeComponent, DashResTestComponent, MyMatchesComponent, MatchCardComponent],
  imports: [CommonModule, MaterialExampleModule, DashboardRoutingModule],
})
export class DashboardModule {}
