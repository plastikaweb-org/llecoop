import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CovalentMessageModule } from '@covalent/core';
import { StoreModule } from '@ngrx/store';
import { config, CONFIG_TOKEN } from 'config/config';
import { ActivitySandbox } from '../../../activity/sandbox/activity.sandbox';
import { AlertComponent, ProgressBarComponent } from '../../../activity/components';
import { AppSandbox } from '../../sandbox/app.sandbox';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]), MatProgressBarModule,
        CovalentMessageModule, MatIconModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        AppComponent, ProgressBarComponent, AlertComponent
      ],
      providers: [
        AppSandbox,
        ActivitySandbox,
        { provide: CONFIG_TOKEN, useValue: config },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
