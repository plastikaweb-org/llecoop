import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config, CONFIG_TOKEN } from '../../conf/config';
import { firebaseConf } from '../../conf/firebase.config';
import { environment } from '../../environments/environment';
import { ActivityModule } from '../activity/activity.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MaterialCovalentModule } from '../material-covalent/material-covalent.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { AppSandbox } from './app.sandbox';
import { AppComponent } from './containers/app/app.component';
import { effects } from './store/effects';
import { CustomSerializer, reducers } from './store/reducers';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    // Activity indicators
    ActivityModule,
    AuthenticationModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // Store
    StoreModule.forRoot(reducers, environment.metaReducers),
    EffectsModule.forRoot(effects),
    environment.imports,
    StoreRouterConnectingModule,
    // Services
    ServicesModule.forRoot()
  ],
  providers: [
    AppSandbox,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: CONFIG_TOKEN, useValue: config }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
