import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MaterialExampleModule } from '../../../material.module';

@NgModule({
  declarations: [DashHomeComponent, SideNavComponent],
  imports: [CommonModule, MaterialExampleModule, DashboardRoutingModule],
})
export class DashboardModule {}
