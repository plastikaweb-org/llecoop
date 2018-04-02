import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConf } from '../../conf/firebase.config';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MaterialCovalentModule } from '../material-covalent/material-covalent.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './containers/app/app.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    MaterialCovalentModule,
    AuthenticationModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
