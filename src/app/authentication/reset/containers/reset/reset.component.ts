import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { AuthService } from '../../../../services';

import { WarningTypes, WarningTypesConfigList } from '../../../../shared';
import { ResetSandbox } from '../../sandbox/reset.sandbox';

@Component({
  selector: 'app-recover',
  template: `
    <app-auth-container>
      <h3 class="text-center" title *ngIf="!resetOk">Introdueix la nova clau per<br>
        <span class="tc-pink-600 mat-caption">{{email}}</span>
      </h3>
      <h3 title *ngIf="resetOk">Clau resetejada correctament</h3>
      <!-- form -->
      <app-card-content-form *ngIf="!resetOk" [fields]="fields"
                             [model]="model"
                             [submitTitle]="'Enviar'"
                             (submit)="onSubmit($event)">
        <!-- login with form -->
        <div otherAction class="mat-caption pad pad-top-none text-right">
          <a [routerLink]="['../login']">Anar al login</a>
        </div>
      </app-card-content-form>
      <!-- login on reset ok -->
      <div postSending *ngIf="resetOk" class="mat-caption pad pad-top-none text-right">
        <h4 class="text-center">Ja pots tornar a la pàgina d'inici i validar-te en l'aplicació</h4>
        <a [routerLink]="['../login']">Tornar al login</a>
      </div>
    </app-auth-container>
  `
})
export class ResetComponent implements OnInit, OnDestroy {
  fields: Array<FormlyFieldConfig>;
  resetOk: boolean;
  email: string;
  model = '' as String;
  type = WarningTypesConfigList[ WarningTypes.Error ];
  resetSubscription: Subscription;
  emailSubscription: Subscription;

  constructor(
    protected sandBox: ResetSandbox,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fields = this.sandBox.builder;
    this.emailSubscription = this.route.queryParams
      .pipe(
        pluck('oobCode'),
        switchMap((code: string) => {
          this.sandBox.oobCode = code;
          return this.authService.verifyOnReset(code);
        })
      )
      .subscribe(
        (email: string) => (this.email = email),
        err => this.sandBox.showError(err)
      );
  }

  ngOnDestroy() {
    this.resetSubscription.unsubscribe();
    this.emailSubscription.unsubscribe();
  }

  onSubmit(e: any) {
    this.sandBox.pass = e.password;
    this.resetSubscription = this.authService
      .confirmPasswordReset(this.sandBox.oobCode, this.sandBox.pass)
      .subscribe(
        () => (this.resetOk = true),
        err => this.sandBox.showError(err)
      );
  }
}
