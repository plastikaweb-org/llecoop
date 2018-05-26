import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppConfig, CONFIG_TOKEN, THEMES_TOKEN } from '../../../config/index';
import * as fromStore from '../../root/store/index';
import { Theme, UiTheme } from '../../shared/index';
import { BaseSandbox } from '../../shared/base.sandbox';

@Injectable()
export class DashboardSandbox extends BaseSandbox {
  theme$ = this.store.select(fromStore.getThemeSelected);

  constructor(
    protected rootStore: Store<fromStore.RootState>,
    @Inject(CONFIG_TOKEN) public appConfig: AppConfig,
    @Inject(THEMES_TOKEN) public appThemes: UiTheme[]
  ) {
    super(rootStore);
  }

  // dispatchers
  doLogout() {
    this.store.dispatch(new fromStore.Logout());
  }

  changeTheme(theme: Theme) {
    this.store.dispatch(new fromStore.ChangeTheme(theme));
  }
}
