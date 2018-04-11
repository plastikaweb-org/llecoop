import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationSharedModule } from '../shared/authentication-shared.module';

import { LoginComponent } from './containers/login/login.component';
import { LoginBuilderService } from './form-builders/login.builder.service';
import { LoginSandbox } from './login.sandbox';

export const ROUTES: Routes = [ { path: '', component: LoginComponent } ];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    AuthenticationSharedModule
  ],
  declarations: [ LoginComponent ],
  providers: [ LoginSandbox, LoginBuilderService ]
})
export class LoginModule {}
