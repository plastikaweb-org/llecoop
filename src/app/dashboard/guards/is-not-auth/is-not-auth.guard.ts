import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { filter, first, map } from 'rxjs/operators';

import * as fromRoot from '../../../root/store';
import { isNil } from '../../../shared';

@Injectable()
export class IsNotAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private store: Store<fromRoot.RootState>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(fromRoot.getIsAuthenticated).pipe(
      filter(auth => !isNil(auth)),
      first(),
      map(auth => {
        if (!auth) {
          this.router.navigate([ '/login' ]);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
