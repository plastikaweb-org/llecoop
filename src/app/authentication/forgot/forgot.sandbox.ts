import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { User } from '../../shared';
import { BaseSandbox } from '../../shared/base.sandbox';
import { forgotBuilder } from './form-builders/forgot.builder';

@Injectable()
export class ForgotSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = forgotBuilder;
  //  user email
  user: User;

  constructor(protected store: Store<any>) {
    super(store);
  }

}