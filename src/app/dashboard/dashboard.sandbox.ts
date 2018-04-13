import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig, CONFIG_TOKEN } from '../../conf/config';
import * as fromStore from '../root/store';

import { BaseSandbox } from '../shared/base.sandbox';

@Injectable()
export class DashboardSandbox extends BaseSandbox {

  constructor(protected rootStore: Store<fromStore.RootState>,
              @Inject(CONFIG_TOKEN) public appConfig: AppConfig) {
    super(rootStore);
  }

  doLogout() {
    this.store.dispatch(new fromStore.Logout());
  }
}
