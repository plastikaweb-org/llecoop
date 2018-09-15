import { Injectable } from '@angular/core';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { select, Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as fromStore from 'app/root/store';
import { Observable } from 'rxjs';
import { forgotBuilder } from '../form-builders/forgot.builder';

@Injectable()
export class ForgotSandbox extends BaseSandbox {
  // form builders
  builder: FormlyFieldConfig[] = forgotBuilder;
  isPassSent$: Observable<boolean> = this.store.pipe(select(fromStore.getRecoverPassSent));

  constructor(protected store: Store<fromStore.RootState>) {
    super(store);
  }

  forgot(e: string) {
    this.store.dispatch(new fromStore.Forgot(e));
  }

}
