import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppConfig, CONFIG_TOKEN } from '../../config/config';

import { BaseSandbox } from '../shared/base.sandbox';
import { Theme } from '../shared';
import * as fromStore from './store';

@Injectable()
export class AppSandbox extends BaseSandbox {
  theme$: Observable<Theme>;

  constructor(protected rootStore: Store<fromStore.RootState>,
              @Inject(CONFIG_TOKEN) public appConfig: AppConfig,
              private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    super(rootStore);

    // Selectors:
    this.theme$ = this.store.select(fromStore.getThemeSelected);
    // Actions:
    this.rootStore.dispatch(new fromStore.GetAuthentication());
    this.rootStore.dispatch(new fromStore.LoadTheme());

    // Register icons:
    this.iconRegistry
      .addSvgIcon('llecoop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/client-logo.svg'));

  }
}