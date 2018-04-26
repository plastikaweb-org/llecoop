import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as fromStore from '../../root/store';
import { Credentials } from '../../shared';
import { BaseSandbox } from '../../shared/base.sandbox';
import { loginBuilder } from './form-builders/login.builder';

@Injectable()
export class LoginSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = loginBuilder;
  // credentials
  credentials: Credentials;

  constructor(protected store: Store<any>) {
    super(store);
  }

  // action dispatchers
  login(credentials: Credentials) {
    this.credentials = credentials;
    this.store.dispatch(new fromStore.Authenticate(this.credentials));
  }
}
