import { NgModule } from '@angular/core';
import { SharedModule } from '@llecoop/shared.module';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ AuthContainerComponent ],
  exports: [ SharedModule, AuthContainerComponent ]
})
export class AuthenticationSharedModule {}
