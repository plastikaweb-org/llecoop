import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { config, CONFIG_TOKEN } from '../../../../../conf/config';

import { AuthContainerComponent } from './auth-container.component';

describe('AuthContainerComponent', () => {
  let component: AuthContainerComponent;
  let fixture: ComponentFixture<AuthContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ MatIconModule, MatToolbarModule, MatCardModule ],
        declarations: [ AuthContainerComponent ],
        providers: [ { provide: CONFIG_TOKEN, useValue: config } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
