import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from '@llecoop';

import { BaseSandbox } from '@llecoop/base.sandbox';
import { select, Store } from '@ngrx/store';
import { AppConfig, CONFIG_TOKEN } from 'config/config';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Injectable()
export class AppSandbox extends BaseSandbox {
  theme$: Observable<Theme> = this.store.pipe(select(fromStore.getThemeSelected));

  constructor(protected rootStore: Store<fromStore.RootState>,
              @Inject(CONFIG_TOKEN) public appConfig: AppConfig,
              private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    super(rootStore);

    this.rootStore.dispatch(new fromStore.GetAuthentication());
    this.rootStore.dispatch(new fromStore.LoadTheme());

    // Register icons:
    this.iconRegistry
      .addSvgIcon('llecoop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/client-logo.svg'));

  }
}
