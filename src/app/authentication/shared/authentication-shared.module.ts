import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthContainerComponent } from './auth-container/auth-container.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ AuthContainerComponent ],
  exports: [ SharedModule, AuthContainerComponent ]
})
export class AuthenticationSharedModule {}
