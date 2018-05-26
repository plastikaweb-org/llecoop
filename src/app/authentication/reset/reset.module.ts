import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationSharedModule } from '../shared/authentication-shared.module';
import { ResetComponent } from './containers/reset/reset.component';
import { ResetSandbox } from './sandbox/reset.sandbox';

export const ROUTES: Routes = [{ path: '', component: ResetComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), AuthenticationSharedModule],
  declarations: [ResetComponent],
  providers: [ResetSandbox]
})
export class ResetModule {}
