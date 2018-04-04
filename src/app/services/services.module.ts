import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';

@NgModule({})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService
      ]
    };
  }
}
