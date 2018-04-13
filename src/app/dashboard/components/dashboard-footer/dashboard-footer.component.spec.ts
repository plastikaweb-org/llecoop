import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule
} from '@covalent/core';

import { DashboardFooterComponent } from './dashboard-footer.component';

describe('DashboardFooterComponent', () => {
  let component: DashboardFooterComponent;
  let fixture: ComponentFixture<DashboardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ MatButtonModule,
          MatCardModule,
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatProgressBarModule,
          MatToolbarModule,
          MatMenuModule,
          CovalentCommonModule,
          CovalentLayoutModule,
          CovalentDialogsModule,
          CovalentMessageModule,
          CovalentMenuModule,
          CovalentMediaModule ],
        declarations: [ DashboardFooterComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
