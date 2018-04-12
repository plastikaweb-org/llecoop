import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CovalentMessageModule } from '@covalent/core';
import { StoreModule } from '@ngrx/store';
import { ActivitySandbox } from '../../../activity/activity.sandbox';
import { AlertComponent, ProgressBarComponent } from '../../../activity/components';
import { AppSandbox } from '../../app.sandbox';
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
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
