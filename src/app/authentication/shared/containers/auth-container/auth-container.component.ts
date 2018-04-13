import { Component } from '@angular/core';
import { AppSandbox } from '../../../../root/app.sandbox';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html'
})
export class AuthContainerComponent {
  config = this.sandbox.appConfig;

  constructor(private sandbox: AppSandbox) { }

}
