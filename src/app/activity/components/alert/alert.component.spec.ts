import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCovalentModule } from '@llecoop/material-covalent/material-covalent.module';
import { ServerError } from '@llecoop/models';
import { of } from 'rxjs';
import { ActivitySandbox } from '../../sandbox/activity.sandbox';

import { AlertComponent } from './alert.component';

const warn: ServerError = { message: 'Review your data', annexMessage: 'Bad credentials provided' };
const err: ServerError = { message: 'This page does not exist', annexMessage: '', code: 404, status: 'not found' };

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let debugEl: DebugElement;
  let sandboxStub: any;

  beforeEach(async(() => {
    sandboxStub = {
      errorVisibility$: of(false),
      errorDescription$: of(err),
      warningVisibility$: of(true),
      warningDescription$: of(warn),
      resetAlertMessage: () => of('close called')
    };

    TestBed.configureTestingModule({
        imports: [ MaterialCovalentModule, BrowserAnimationsModule ],
        declarations: [ AlertComponent ],
        providers: [ { provide: ActivitySandbox, useValue: sandboxStub } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have an error message visible', () => {
    // let visible;
    // let description;

    // component.visible$.subscribe(res => {
    //   visible = res;
    // });
    const message = debugEl.query(By.css('.td-message'));
    fixture.detectChanges();
    // expect(visible).toBeFalsy();
    // expect(description).toEqual(err);
    expect(message).toBeNull();
    // const annex = debugEl.query(By.css('.td-message')).nativeElement.attributes.getNamedItem('ng-reflect-label').value;
    // expect(message).toBe(err.message);
    // expect(annex).toBe(err.annexMessage);
  });

  xit('should have a alert message visible', fakeAsync(() => {
    // let visible;
    // let description;

    //  component.visible$.subscribe(res => {
    //   visible = res;
    // });
    // const message = debugEl.query(By.css('.td-message'));
    fixture.detectChanges();
    // expect(visible).toBeTruthy();
    // expect(description).toEqual(warn);
    // expect(message).not.toBeNull();
  }));

  xit('should call close method', inject([ ActivitySandbox ], (service: ActivitySandbox) => {
    component.close();
  }));

});

