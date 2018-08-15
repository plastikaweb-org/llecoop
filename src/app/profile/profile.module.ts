import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@llecoop/shared.module';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSandbox } from './sandbox/profile.sandbox';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [ ProfileContainerComponent ],
  providers: [ ProfileSandbox ]
})
export class ProfileModule {}
