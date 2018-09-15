import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimation, Theme } from '@llecoop';
import { Observable } from 'rxjs';
import { AppSandbox } from '../../sandbox/app.sandbox';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="theme$ | async">
      <!-- loading bar -->
      <app-progress-bar></app-progress-bar>
      <!-- alert -->
      <app-alert></app-alert>
      <!-- router outlet -->
      <div [@routeAnimation]="getRouterState(o)">
        <router-outlet #o="outlet"></router-outlet>
      </div>
    </div>`,
  animations: [ routeAnimation ]
})
export class AppComponent {
  theme$: Observable<Theme> = this.sandBox.theme$;

  constructor(private sandBox: AppSandbox) {}

  getRouterState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
