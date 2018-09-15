import { Component, OnInit } from '@angular/core';
import { User } from '@llecoop';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ForgotSandbox } from '../../sandbox/forgot.sandbox';

@Component({
  selector: 'app-forgot',
  template: `
    <app-auth-container>
      <h3 title *ngIf="!(isPassSent$ | async) as isPassSent; else elseTitle">Regenera la teva clau</h3>
      <ng-template #elseTitle>
      <h3 title>Petició de canvi de clau rebuda</h3>
      </ng-template>
      <!-- form -->
      <app-card-content-form card-content-form *ngIf="!(isPassSent$ | async)"
                             [fields]="fields"
                             [model]="model"
                             [submitTitle]="'Enviar'"
                             (submit)="onSubmit($event)">
        <!-- login with form -->
        <div otherAction class="mat-caption pad pad-top-none text-right">
          <a [routerLink]="['../login']">Tornar al login</a>
        </div>
      </app-card-content-form>
      <!-- login on reset ok -->
      <div postSending *ngIf="isPassSent$ | async" class="mat-caption pad pad-top-none text-right">
        <h4 class="text-center">Consulta la teva bústia de correu</h4>
        <a [routerLink]="['../login']">Tornar al login</a>
      </div>
    </app-auth-container>
  `
})
export class ForgotComponent implements OnInit {
  fields: Array<FormlyFieldConfig>;
  isPassSent$ = this.sandBox.isPassSent$;
  model = {} as User;

  constructor(protected sandBox: ForgotSandbox) {}

  ngOnInit() {
    this.fields = this.sandBox.builder;
  }

  onSubmit(e: User) {
    this.sandBox.forgot(e.email);
  }
}
