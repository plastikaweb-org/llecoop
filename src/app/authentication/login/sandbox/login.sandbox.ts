import { Injectable } from '@angular/core';
import { Credentials } from '@llecoop';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as fromStore from 'app/root/store';
import { loginBuilder } from '../form-builders/login.builder';

@Injectable()
export class LoginSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = loginBuilder;

  constructor(protected store: Store<fromStore.RootState>) {
    super(store);
  }

  // action dispatchers
  login(credentials: Credentials) {
    this.store.dispatch(new fromStore.Authenticate(credentials));
  }
}
