import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as fromActivity from '../../activity/store';
import { AuthService } from '../../services';
import { User } from '../../shared';
import { BaseSandbox } from '../../shared/base.sandbox';
import { forgotBuilder } from './form-builders/forgot.builder';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ForgotSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = forgotBuilder;
  //  user email
  user: User;
  resetSubject$ = new BehaviorSubject(false);

  constructor(protected store: Store<any>, private authService: AuthService) {
    super(store);
  }

  recover(user: User) {
    this.store.dispatch(new fromActivity.ResetErrorMessage());
    this.user = user;
    this.authService
      .resetPassword(user.email)
      .subscribe(
        () => this.resetSubject$.next(true),
        err => this.store.dispatch(new fromActivity.ShowErrorMessage(err))
      );
  }
}
