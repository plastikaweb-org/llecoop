import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from '../root/guards';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [ IsAuthGuard ] },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotModule', canActivate: [ IsAuthGuard ] }
  // { path: 'recover', loadChildren: '' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
