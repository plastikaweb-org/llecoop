import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Credentials, WarningTypes, WarningTypesConfigList } from '../../../../shared';

import { LoginSandbox } from '../../sandbox/login.sandbox';

@Component({
  selector: 'app-login',
  template: `
    <app-auth-container>
      <h3 title>Accés a l'àrea personal</h3>
          <app-card-content-form card-content-form
          [fields]="fields"
          [model]="model"
          [submitTitle]="'Enviar'"
          (submit)="onSubmit($event)">
            <!-- login recover pass -->
            <div otherAction class="mat-caption pad pad-top-none text-right">
              <a [routerLink]="['../forgot']">Has oblidat la teva clau?</a>
            </div>
          </app-card-content-form>
    </app-auth-container>
  `,
})
export class LoginComponent {
  // fields: Array<FormlyFieldConfig> = this.sandBox.builder;
  fields: Array<FormlyFieldConfig> = this.sandBox.builder;
  model = {} as Credentials;
  type = WarningTypesConfigList[WarningTypes.Error];

  constructor(protected sandBox: LoginSandbox) {}

  onSubmit(e: Credentials) {
    this.sandBox.login({ ...e });
  }
}
