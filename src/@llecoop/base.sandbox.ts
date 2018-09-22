import { Injectable } from '@angular/core';
import { AlertDescription } from '@llecoop';
import { Store } from '@ngrx/store';
import * as fromActivity from '../app/activity/store/index';

@Injectable()
export abstract class BaseSandbox {
  protected constructor(protected store: Store<any>) {
    // this.isAuthenticated$ = store.select(fromRoot.getIsAuthenticated);
  }

  resetAlert() {
    this.store.dispatch(new fromActivity.ResetAlert());
  }

  showAlert(description: AlertDescription) {
    this.store.dispatch(new fromActivity.ShowAlert(description));
  }
}
