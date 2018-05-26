import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { config, CONFIG_TOKEN } from '../../../../../config/config';
import { AppSandbox } from '../../../../root/sandbox/app.sandbox';

import { AuthContainerComponent } from './auth-container.component';

describe('AuthContainerComponent', () => {
  let component: AuthContainerComponent;
  let fixture: ComponentFixture<AuthContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, MatIconModule, MatToolbarModule,
          MatCardModule, StoreModule.forRoot({}) ],
        declarations: [ AuthContainerComponent ],
        providers: [ { provide: CONFIG_TOKEN, useValue: config }, AppSandbox ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
