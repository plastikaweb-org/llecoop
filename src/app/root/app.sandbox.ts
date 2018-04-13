import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppConfig, CONFIG_TOKEN } from '../../config/config';

import { BaseSandbox } from '../shared/base.sandbox';
import * as fromStore from './store';

@Injectable()
export class AppSandbox extends BaseSandbox {

  constructor(protected rootStore: Store<fromStore.RootState>,
              @Inject(CONFIG_TOKEN) public appConfig: AppConfig,
              private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    super(rootStore);

    // Selectors:

    // Actions:
    this.rootStore.dispatch(new fromStore.GetAuthentication());

    // Register icons:
    this.iconRegistry
      .addSvgIcon('llecoop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/client-logo.svg'));

  }
}
