import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppConfig, CONFIG_TOKEN, THEMES_TOKEN } from 'config';
import * as fromStore from '../../root/store';
import { Theme, UiTheme } from '@llecoop';
import { BaseSandbox } from '@llecoop/base.sandbox';

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
