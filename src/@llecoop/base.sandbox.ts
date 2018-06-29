import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActivity from '../app/activity/store/index';

@Injectable()
export abstract class BaseSandbox {
  // isAuthenticated$: Observable<boolean>;

  protected constructor(protected store: Store<any>) {
    // this.isAuthenticated$ = store.select(fromRoot.getIsAuthenticated);
  }

  resetError() {
    this.store.dispatch(new fromActivity.ResetErrorMessage());
  }

  showError(err) {
    this.store.dispatch(new fromActivity.ShowErrorMessage(err));
  }
}
