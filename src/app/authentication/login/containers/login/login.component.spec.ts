import { APP_BASE_HREF } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { of } from 'rxjs';
import { CONFIG_TOKEN } from '../../../../../config/config';
import { MaterialCovalentModule } from '../../../../material-covalent/material-covalent.module';
import { AppSandbox } from '../../../../root/sandbox/app.sandbox';
import { CardContentFormComponent } from '../../../../shared/components';
import { configMock } from '../../../../shared/mocks';
import { AuthContainerComponent } from '../../../shared/containers/auth-container/auth-container.component';
import { LoginSandbox } from '../../sandbox/login.sandbox';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;
  let sandboxStub: any;
  let appSandboxStub: any;

  beforeEach(async(() => {
    sandboxStub = {
      builder: of(),
      login: () => of()
    };
    appSandboxStub = {};

    TestBed.configureTestingModule({
        imports: [ MaterialCovalentModule, RouterModule.forRoot([]), ReactiveFormsModule, FormlyModule.forRoot({}) ],
        declarations: [ LoginComponent, CardContentFormComponent, AuthContainerComponent ],
        providers: [ { provide: APP_BASE_HREF, useValue: '/' }, { provide: LoginSandbox, useValue: sandboxStub }, {
          provide: AppSandbox,
          useValue: appSandboxStub
        }, { provide: CONFIG_TOKEN, useValue: configMock } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
