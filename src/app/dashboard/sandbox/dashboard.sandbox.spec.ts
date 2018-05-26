import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { CONFIG_TOKEN, THEMES_TOKEN } from '../../../config';
import { configMock } from '../../shared';
import { DashboardSandbox } from './dashboard.sandbox';


describe('DashboardSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ DashboardSandbox, { provide: CONFIG_TOKEN, useValue: configMock }, { provide: THEMES_TOKEN, useValue: null } ]
    });
  });

  it('should be created', inject([ DashboardSandbox ], (service: DashboardSandbox) => {
    expect(service).toBeTruthy();
  }));
});
