import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardFooterComponent, ThemeSelectorComponent } from './components';
import { DashboardComponent } from './containers';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSandbox } from './sandbox/dashboard.sandbox';
import { IsNotAuthGuard } from './guards';
import { DashboardContentComponent } from './containers/dashboard-content/dashboard-content.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent, ThemeSelectorComponent, DashboardFooterComponent, DashboardContentComponent ],
  providers: [ DashboardSandbox, IsNotAuthGuard ]
})
export class DashboardModule {}
