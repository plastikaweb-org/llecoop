import { Injectable } from '@angular/core';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { WarningTypes } from '@llecoop';
import { select, Store } from '@ngrx/store';

import * as fromStore from '../store/index';

@Injectable()
export class ActivitySandbox extends BaseSandbox {
  // selectors
  snackBarVisible$ = this.store.pipe(select(fromStore.getSnackBarVisible));
  snackBarConfiguration$ = this.store.pipe(select(fromStore.getSnackBarConfiguration));
  progressBarVisible$ = this.store.pipe(select(fromStore.getLoadingStateVisibility));
  errorVisibility$ = this.store.pipe(select(fromStore.getErrorMessageVisible));
  errorDescription$ = this.store.pipe(select(fromStore.getErrorMessageDescription));
  warningVisibility$ = this.store.pipe(select(fromStore.getWarningMessageVisible));
  warningDescription$ = this.store.pipe(select(fromStore.getWarningMessageDescription));

  constructor(protected appState: Store<fromStore.ActivityState>) {
    super(appState);
  }

  // dispatchers
  resetSnackBar() {
    this.store.dispatch(new fromStore.ResetSnackBar());
  }

  resetAlertMessage(type: WarningTypes) {
    let action;
    switch (type) {
      case WarningTypes.Error:
        action = fromStore.ResetErrorMessage;
        break;
      case WarningTypes.Warning:
        action = fromStore.ResetWarningMessage;
    }
    this.store.dispatch(new action());
  }
}
