import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { BaseSandbox } from '../../../shared/base.sandbox';
import { resetBuilder } from '../form-builders/reset.builder';

@Injectable()
export class ResetSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = resetBuilder;
  // code
  oobCode: string;
  //  user pass
  pass: string;

  constructor(protected store: Store<any>) {
    super(store);
  }
}
