import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardFooterComponent, ThemeSelectorComponent } from './components';
import { DashboardComponent } from './containers';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSandbox } from './dashboard.sandbox';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent, ThemeSelectorComponent, DashboardFooterComponent ],
  providers: [ DashboardSandbox ]
})
export class DashboardModule {}
