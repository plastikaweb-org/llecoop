import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

import { isNil } from '../../../shared/helpers';
import * as fromRoot from '../../store';

@Injectable()
export class IsAuthGuard implements CanActivate, CanActivateChild {
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
        if (auth) {
          this.router.navigate([ '/' ]);
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
