import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { CONFIG_TOKEN } from '../../../config';
import { configMock } from '../../shared';
import { AppSandbox } from './app.sandbox';

describe('AppSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ AppSandbox, { provide: CONFIG_TOKEN, useValue: configMock } ]
    });
  });

  it('should be created', inject([ AppSandbox ], (service: AppSandbox) => {
    expect(service).toBeTruthy();
  }));
});
