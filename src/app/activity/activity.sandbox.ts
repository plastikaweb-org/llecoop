import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseSandbox } from '../shared/base.sandbox';
import { WarningTypes } from '../shared/models';

import * as fromStore from './store';

@Injectable()
export class ActivitySandbox extends BaseSandbox {
  // selectors
  snackBarVisible$ = this.store.select(fromStore.getSnackBarVisible);
  snackBarConfiguration$ = this.store.select(fromStore.getSnackBarConfiguration);
  progressBarVisible$ = this.store.select(fromStore.getProgressBarVisible);
  errorVisibility$ = this.store.select(fromStore.getErrorMessageVisible);
  errorDescription$ = this.store.select(fromStore.getErrorMessageDescription);
  warningVisibility$ = this.store.select(fromStore.getWarningMessageVisible);
  warningDescription$ = this.store.select(
    fromStore.getWarningMessageDescription
  );

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
