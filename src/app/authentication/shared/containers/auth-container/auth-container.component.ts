import { Component, Inject } from '@angular/core';
import { AppConfig, CONFIG_TOKEN } from '../../../../../conf/config';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html'
})
export class AuthContainerComponent {
  constructor(@Inject(CONFIG_TOKEN) public appConfig: AppConfig) { }

}
