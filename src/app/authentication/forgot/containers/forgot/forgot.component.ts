import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../../services';
import { User, WarningTypes, WarningTypesConfigList } from '../../../../shared';
import { ForgotSandbox } from '../../forgot.sandbox';

@Component({
  selector: 'app-forgot',
  template: `
    <app-auth-container>
      <h3 title *ngIf="!resetOk">Regenera la teva clau</h3>
      <h3 title *ngIf="resetOk">Petició de canvi de clau rebuda</h3>
      <!-- form -->
      <app-card-content-form card-content-form *ngIf="!resetOk"
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
      <div postSending *ngIf="resetOk" class="mat-caption pad pad-top-none text-right">
          <h4 class="text-center">Consulta la teva bústia de correu</h4>
          <a [routerLink]="['../login']">Tornar al login</a>
      </div>
    </app-auth-container>
  `
})
export class ForgotComponent implements OnInit, OnDestroy {
  fields: Array<FormlyFieldConfig>;
  resetOk: boolean;
  model = {} as User;
  type = WarningTypesConfigList[WarningTypes.Error];
  recoverSubscription: Subscription;

  constructor(
    protected sandBox: ForgotSandbox,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fields = this.sandBox.builder;
  }

  ngOnDestroy() {
    if (this.recoverSubscription) {
      this.recoverSubscription.unsubscribe();
    }
  }

  onSubmit(e: User) {
    this.sandBox.user = e;
    this.sandBox.resetError();
    this.recoverSubscription = this.authService
      .resetPassword(e.email)
      .subscribe(
        () => (this.resetOk = true),
        err => this.sandBox.showError(err)
      );
  }
}
