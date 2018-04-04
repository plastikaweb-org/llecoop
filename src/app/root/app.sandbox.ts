import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseSandbox } from '../shared/base.sandbox';
import * as fromStore from './store';

@Injectable()
export class AppSandbox extends BaseSandbox {

  constructor(protected rootStore: Store<fromStore.RootState>) {
    super(rootStore);

    // Selectors:

    // Actions:
    this.rootStore.dispatch(new fromStore.GetAuthentication());
  }

}
