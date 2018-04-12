import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServerError, WarningTypeConfig } from '../../../shared';

import { toggleAnimation } from '../../../shared/animations/toggle.animation';
import { WarningTypes, WarningTypesConfigList } from '../../../shared/models';
import { ActivitySandbox } from '../../activity.sandbox';

@Component({
  selector: 'app-alert',
  template: `
	<div *ngIf="visible$ | async" @toggleAnimation>
	  <td-message [label]="(alert$ | async)?.annexMessage"
				  [sublabel]="(alert$ | async)?.message" [color]="type.color" [icon]="type.icon">
		<button td-message-actions mat-icon-button (click)="close()">
		  <mat-icon>cancel</mat-icon>
		</button>
	  </td-message>
	</div>
  `,
  animations: [toggleAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  visible$: Observable<boolean>;
  alert$: Observable<ServerError>;
  @Input() type: WarningTypeConfig = WarningTypesConfigList[WarningTypes.Error];

  constructor(private sandbox: ActivitySandbox) {}

  ngOnInit() {
    switch (this.type.type) {
      case WarningTypes.Error:
        this.visible$ = this.sandbox.errorVisibility$;
        this.alert$ = this.sandbox.errorDescription$;
        break;
      case WarningTypes.Warning:
        this.visible$ = this.sandbox.warningVisibility$;
        this.alert$ = this.sandbox.warningDescription$;
        break;
    }
  }

  close() {
    this.sandbox.resetAlertMessage(this.type.type);
  }
}
