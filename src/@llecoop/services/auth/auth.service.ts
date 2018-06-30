import { Injectable } from '@angular/core';
import { Auth, AuthException, Credentials } from '@llecoop';
import { AngularFireAuth } from 'angularfire2/auth';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  isAuthenticated() {
    return this.afAuth.authState.pipe(
      map((data: Auth) => {
          if (data) {
            return data.uid;
          }
          throw new AuthException();
        })
    );
  }

  login(credentials: Credentials) {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    );
  }

  logout() {
    return from(this.afAuth.auth.signOut());
  }

  resetPassword(email: string) {
    return from(
      this.afAuth.auth.sendPasswordResetEmail(email)
    );
  }

  verifyOnReset(code: string) {
    return from(this.afAuth.auth.verifyPasswordResetCode(code));
  }

  confirmPasswordReset(code: string, newPassword: string) {
    return from(
      this.afAuth.auth.confirmPasswordReset(code, newPassword)
    );
  }
}
