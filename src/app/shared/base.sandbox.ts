import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../root/store';

@Injectable()
export abstract class BaseSandbox {
  // isAuthenticated$: Observable<boolean>;

  protected constructor(protected store: Store<any>) {
    // this.isAuthenticated$ = store.select(fromRoot.getIsAuthenticated);
  }

}
