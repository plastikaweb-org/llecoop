import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivitySandbox } from '../../activity.sandbox';

@Component({
  selector: 'app-progress-bar',
  styles: [
    `
      mat-progress-bar {
        position: absolute;
        top: 0;
        z-index: 2;
      }`
  ],
  template: `
	<mat-progress-bar *ngIf="visible$ | async" color="accent" mode="indeterminate"></mat-progress-bar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  visible$: Observable<boolean>;

  constructor(private sandbox: ActivitySandbox) {}

  ngOnInit() {
    this.visible$ = this.sandbox.progressBarVisible$;
  }
}
