import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { configMock, themesMock } from '@llecoop/mocks';
import { MaterialCovalentModule } from '@llecoop/material-covalent/material-covalent.module';
import { StoreModule } from '@ngrx/store';

import { CONFIG_TOKEN, THEMES_TOKEN } from 'config';
import { DashboardFooterComponent, ThemeSelectorComponent } from '../../components';
import { ProfileBtnComponent } from '../../components/profile-btn/profile-btn.component';
import { DashboardSandbox } from '../../sandbox/dashboard.sandbox';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialCovalentModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([])
      ],
      declarations: [
        DashboardComponent,
        DashboardContentComponent,
        ThemeSelectorComponent,
        DashboardFooterComponent,
        ProfileBtnComponent
      ],
      providers: [
        { provide: CONFIG_TOKEN, useValue: configMock },
        { provide: THEMES_TOKEN, useValue: themesMock },
        { provide: APP_BASE_HREF, useValue: '/' },
        DashboardSandbox
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
