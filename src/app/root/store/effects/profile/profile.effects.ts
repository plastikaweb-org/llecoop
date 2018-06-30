import { Injectable } from '@angular/core';
import { Profile } from '@llecoop/models/profile';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from '../../actions';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private afs: AngularFirestore) {}

  @Effect()
  getProfile$ = this.actions$.ofType(fromActions.GET_PROFILE).pipe(
    map((action: fromActions.GetProfile) => action.payload),
    switchMap((uid: string) => {
      return this.afs.doc<Profile>(`users/${uid}`).valueChanges().pipe(
        map((profile: Profile) => new fromActions.GetProfileSuccess(profile)),
        catchError(error => of(new fromActions.GetProfileFail(error)))
      );
    })
  );

}
