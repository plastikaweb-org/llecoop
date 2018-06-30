import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Profile } from '@llecoop/models/profile';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/root/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, first, switchMap } from 'rxjs/operators';

@Injectable()
export class HasInitDataGuard implements CanActivate {
  constructor(private store: Store<fromRoot.RootState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getDataFromStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private getDataFromStore(): Observable<Profile> {
    return this.store.select(fromRoot.getProfile).pipe(
      filter((profile: Profile) => !!profile),
      first()
    );
  }
}
