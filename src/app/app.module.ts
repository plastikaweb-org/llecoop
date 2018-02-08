import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialCovalentModule } from './material-covalent/material-covalent.module';
import { AuthenticationModule } from './authentication/authentication.module';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterialCovalentModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
