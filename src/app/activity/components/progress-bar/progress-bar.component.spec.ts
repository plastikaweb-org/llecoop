import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { ActivitySandbox } from '../../sandbox/activity.sandbox';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let debugEl: DebugElement;
  let sandboxStub: any;

  beforeEach(async(() => {
    sandboxStub = {
      progressBarVisible$: of(true)
    };

    TestBed.configureTestingModule({
        imports: [ MaterialCovalentModule ],
        declarations: [ ProgressBarComponent ],
        providers: [ { provide: ActivitySandbox, useValue: sandboxStub } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible', fakeAsync(() => {
    let visible;
    sandboxStub.progressBarVisible$ = of(false);
    component.ngOnInit();
    component.visible$.subscribe(res => {
      visible = res;
    });
    const bar = debugEl.query(By.css('.mat-progress-bar'));
    fixture.detectChanges();
    expect(visible).toBeTruthy();
    expect(bar).not.toBeNull();
  }));

});
