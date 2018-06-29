import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';
import { of } from 'rxjs';
import { MaterialCovalentModule } from '../../../shared/material-covalent/material-covalent.module';
import { ActivitySandbox } from '../../sandbox/activity.sandbox';

import { SnackBarComponent } from './snack-bar.component';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;
  let debugEl: DebugElement;
  let sandboxStub: any;

  beforeEach(async(() => {
    sandboxStub = {
      snackBarVisible$: of(false),
      snackBarConfiguration$: of({
        message: 'hello',
        action: 'do it',
        duration: 1000
      }),
      resetSnackBar: () => of()
    };

    TestBed.configureTestingModule({
        imports: [ MaterialCovalentModule ],
        declarations: [ SnackBarComponent ],
        providers: [ MatSnackBar, { provide: ActivitySandbox, useValue: sandboxStub } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
