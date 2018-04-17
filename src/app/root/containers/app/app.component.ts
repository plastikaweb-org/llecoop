import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Theme, WarningTypeConfig, WarningTypes, WarningTypesConfigList } from '../../../shared';
import { AppSandbox } from '../../app.sandbox';

@Component({
  selector: 'app-root',
  template: `
  <div [class]="theme$ | async">
    <!-- loading bar -->
    <app-progress-bar></app-progress-bar>
    <!-- warning alert -->
   <app-alert [type]="warningType"></app-alert>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  theme$: Observable<Theme> = this.sandBox.theme$;
  warningType: WarningTypeConfig = WarningTypesConfigList[ WarningTypes.Error ];

  constructor(private sandBox: AppSandbox) {}
}
