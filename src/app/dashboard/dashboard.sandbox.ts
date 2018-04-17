import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig, CONFIG_TOKEN } from '../../config/config';
import * as fromStore from '../root/store';

import { BaseSandbox } from '../shared/base.sandbox';
import { Theme } from '../shared';

@Injectable()
export class DashboardSandbox extends BaseSandbox {
  theme$ = this.store.select(fromStore.getThemeSelected);

  constructor(protected rootStore: Store<fromStore.RootState>,
              @Inject(CONFIG_TOKEN) public appConfig: AppConfig) {
    super(rootStore);
  }

  // dispatchers
  doLogout() {
    this.store.dispatch(new fromStore.Logout());
  }

  changeTheme(theme: Theme) {
    this.store.dispatch((new fromStore.ChangeTheme(theme)));
  }
}
