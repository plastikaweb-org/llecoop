import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers';
import { IsNotAuthGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [IsNotAuthGuard],
    children: [
      { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
