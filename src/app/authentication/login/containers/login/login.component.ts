import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Credentials, WarningTypes, WarningTypesConfigList } from '../../../../shared/models';

import { LoginSandbox } from '../../login.sandbox';

@Component({
  selector: 'app-login',
  template: `
    <app-auth-container>
      <h3 title>Accés a l'àrea personal</h3>
          <app-card-content-form [fields]="fields"
                                 [model]="model"
                                 [submitTitle]="'Enviar'"
                                 (submit)="onSubmit($event)">
          </app-card-content-form>
        <!-- login recover pass -->
        <!--<a href="#" title="legal">Recuperar contrassenya</a>-->
    </app-auth-container>
  `
})
export class LoginComponent {
  fields: Array<FormlyFieldConfig> = this.sandBox.builder;
  model = {} as Credentials;
  type = WarningTypesConfigList[ WarningTypes.Error ];

  constructor(protected sandBox: LoginSandbox) {
  }

  onSubmit(e: Credentials) {
    this.sandBox.login({ ...e });
  }
}
