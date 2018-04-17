import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LocalstorageService } from './localstorage/localstorage.service';
import { WindowRefService } from './windowref/windowref.service';

@NgModule({})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        LocalstorageService,
        WindowRefService
      ]
    };
  }
}
