import { Inject, Injectable } from '@angular/core';
import { Profile, Theme, UiTheme } from '@llecoop';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { select, Store } from '@ngrx/store';
import * as fromStore from 'app/root/store';

import { AppConfig, CONFIG_TOKEN, THEMES_TOKEN } from 'config';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardSandbox extends BaseSandbox {
  theme$: Observable<Theme> = this.store.pipe(select(fromStore.getThemeSelected));
  basicProfile$: Observable<Partial<Profile>> = this.store.pipe(select(fromStore.getBasicProfile));

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
