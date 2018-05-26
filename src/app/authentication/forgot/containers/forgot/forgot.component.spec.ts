import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardContentFormComponent } from '../../../../shared';
import { AuthContainerComponent } from '../../../shared/containers/auth-container/auth-container.component';
import { ForgotComponent } from './forgot.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { ForgotSandbox } from '../../sandbox/forgot.sandbox';
import { StoreModule } from '@ngrx/store';
import { AuthService } from '../../../../services';

describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        MatCardModule,
        MatToolbarModule,
        MatIconModule
      ],
      declarations: [
        ForgotComponent,
        CardContentFormComponent,
        AuthContainerComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ForgotSandbox, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
