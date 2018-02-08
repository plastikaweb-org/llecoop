import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';

export const ROUTES: Routes = [ { path: '', component: LoginComponent } ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
