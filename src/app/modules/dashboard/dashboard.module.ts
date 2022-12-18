import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { MaterialExampleModule } from '../../../material.module';

@NgModule({
  declarations: [DashHomeComponent],
  imports: [CommonModule, MaterialExampleModule, DashboardRoutingModule],
})
export class DashboardModule {}
