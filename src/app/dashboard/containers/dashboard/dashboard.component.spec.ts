import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatListModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule } from '@covalent/core';
import { StoreModule } from '@ngrx/store';
import { config, CONFIG_TOKEN } from '../../../../conf/config';
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
          MatIconModule,
          MatMenuModule,
          CovalentLayoutModule,
          MatSidenavModule,
          MatListModule,
          CovalentMenuModule,
          CovalentMediaModule,
          StoreModule.forRoot({})
        ],
        declarations: [ DashboardComponent, ThemeSelectorComponent, DashboardFooterComponent ],
        providers: [ { provide: CONFIG_TOKEN, useValue: config }, DashboardSandbox ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
