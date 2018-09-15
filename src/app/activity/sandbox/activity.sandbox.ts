import { Injectable } from '@angular/core';
import { AlertDescription } from '@llecoop';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActivity from '../store';

@Injectable()
export class ActivitySandbox extends BaseSandbox {
  snackBarVisible$ = this.store.pipe(select(fromActivity.getSnackBarVisible));
  snackBarConfiguration$ = this.store.pipe(select(fromActivity.getSnackBarConfiguration));
  progressBarVisible$ = this.store.pipe(select(fromActivity.getLoadingStateVisibility));
  alertDescription$: Observable<AlertDescription> = this.store.pipe(select(fromActivity.getAlertDescription));
  alertVisibility$: Observable<boolean> = this.store.pipe(select(fromActivity.getAlertVisibility));

  constructor(protected appState: Store<fromActivity.ActivityState>) {
    super(appState);
  }

  resetSnackBar() {
    this.store.dispatch(new fromActivity.ResetSnackBar());
  }

  resetAlert() {
    this.store.dispatch(new fromActivity.ResetAlert());
  }
}
