import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { ServerError, WarningTypes, WarningTypesConfigList } from '../../../shared/models';
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

  it('should have an error message visible', () => {
    let visible;
    let description;
    component.type = WarningTypesConfigList[ WarningTypes.Error ];

    component.ngOnInit();
    component.visible$.subscribe(res => {
      visible = res;
    });
    component.alert$.subscribe(res => {
      description = res;
    });
    const message = debugEl.query(By.css('.td-message'));
    fixture.detectChanges();
    expect(visible).toBeFalsy();
    expect(description).toEqual(err);
    expect(message).toBeNull();
    // const annex = debugEl.query(By.css('.td-message')).nativeElement.attributes.getNamedItem('ng-reflect-label').value;
    // expect(message).toBe(err.message);
    // expect(annex).toBe(err.annexMessage);
  });

  it('should have a warning message visible', fakeAsync(() => {
    let visible;
    let description;
    component.type = WarningTypesConfigList[ WarningTypes.Warning ];

    component.ngOnInit();
    component.visible$.subscribe(res => {
      visible = res;
    });
    component.alert$.subscribe(res => {
      description = res;
    });
    // const message = debugEl.query(By.css('.td-message'));
    fixture.detectChanges();
    expect(visible).toBeTruthy();
    expect(description).toEqual(warn);
    // expect(message).not.toBeNull();
  }));

  it('should call close method', inject([ ActivitySandbox ], (service: ActivitySandbox) => {
    const spy = spyOn(service, 'resetAlertMessage').and.returnValue(of('OK'));
    component.close();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
  }));

});

