import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { CONFIG_TOKEN, THEMES_TOKEN } from '../../../../config';
import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { configMock, themesMock } from '../../../shared';
import { DashboardFooterComponent, ThemeSelectorComponent } from '../../components';
import { DashboardSandbox } from '../../dashboard.sandbox';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialCovalentModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        DashboardComponent,
        ThemeSelectorComponent,
        DashboardFooterComponent
      ],
      providers: [
        { provide: CONFIG_TOKEN, useValue: configMock },
        { provide: THEMES_TOKEN, useValue: themesMock },
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
