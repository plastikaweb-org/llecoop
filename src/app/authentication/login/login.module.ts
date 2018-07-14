import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationSharedModule } from '../shared/authentication-shared.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginSandbox } from './sandbox/login.sandbox';

export const ROUTES: Routes = [ { path: '', component: LoginComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES), AuthenticationSharedModule ],
  declarations: [ LoginComponent ],
  providers: [ LoginSandbox ]
})
export class LoginModule {}
