import { NgModule } from '@angular/core';
import { SharedModule } from '@llecoop/shared.module';
import { DashboardFooterComponent, ThemeSelectorComponent } from './components';
import { DashboardComponent } from './containers';
import { DashboardContentComponent } from './containers/dashboard-content/dashboard-content.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IsNotAuthGuard } from './guards';
import { DashboardSandbox } from './sandbox/dashboard.sandbox';
import { ProfileBtnComponent } from './components/profile-btn/profile-btn.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, ThemeSelectorComponent,
    DashboardFooterComponent, DashboardContentComponent, ProfileBtnComponent
  ],
  providers: [ DashboardSandbox, IsNotAuthGuard ]
})
export class DashboardModule {}
