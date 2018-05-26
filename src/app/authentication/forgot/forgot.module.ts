import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationSharedModule } from '../shared/authentication-shared.module';
import { ForgotComponent } from './containers/forgot/forgot.component';
import { ForgotSandbox } from './sandbox/forgot.sandbox';

export const ROUTES: Routes = [{ path: '', component: ForgotComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), AuthenticationSharedModule],
  declarations: [ForgotComponent],
  providers: [ForgotSandbox]
})
export class ForgotModule {}
