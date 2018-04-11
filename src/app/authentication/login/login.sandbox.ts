import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { BaseSandbox } from '../../shared/base.sandbox';
import { Credentials } from '../../shared/models/index';
import { LoginBuilderService } from './form-builders/login.builder.service';
import * as fromStore from '../../root/store';

@Injectable()
export class LoginSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[];
  // credentials
  credentials: Credentials;

  constructor(private appState: Store<any>,
              private formlyConfig: FormlyConfig,
              private loginBuilderService: LoginBuilderService) {
    super(appState);
    // formly login builder
    this.builder = this.loginBuilderService.getBuilder();
  }

  // action dispatchers - company
  login(credentials: Credentials) {
    this.credentials = credentials;
    this.store.dispatch(new fromStore.Authenticate(this.credentials));
  }
}
