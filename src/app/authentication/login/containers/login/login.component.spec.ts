import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardContentFormComponent } from '../../../../shared/components';
import { AuthContainerComponent } from '../../../shared/containers/auth-container/auth-container.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ LoginComponent, CardContentFormComponent, AuthContainerComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
