import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertDescription, AlertTypes, AlertTypesConfigList, toggleAnimation } from '@llecoop';
import { Observable } from 'rxjs';

import { ActivitySandbox } from '../../sandbox/activity.sandbox';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [ toggleAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  visible$: Observable<boolean> = this.sandbox.alertVisibility$;
  description$: Observable<AlertDescription> = this.sandbox.alertDescription$;

  constructor(private sandbox: ActivitySandbox) {}

  close() {
    this.sandbox.resetAlert();
  }

  getAlertType(type: AlertTypes) {
    return AlertTypesConfigList[ type ];
  }
}
