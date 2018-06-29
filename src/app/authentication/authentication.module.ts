import { NgModule } from '@angular/core';
import { SharedModule } from '@llecoop/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule {}
