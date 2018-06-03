import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { ActivitySandbox } from '../../sandbox/activity.sandbox';
import { SnackBarConfiguration } from '../../store/state';

@Component({
  selector: 'app-snack-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent implements OnInit, OnDestroy {
  snackBarSubscription: Subscription;
  snackBarDismissedSubscription: Subscription;

  constructor(private snackBar: MatSnackBar,
              private sandbox: ActivitySandbox) {}

  ngOnInit() {
    this.snackBarSubscription = this.sandbox.snackBarVisible$
      .pipe(
        filter((visible: boolean) => visible),
        switchMap(() => this.sandbox.snackBarConfiguration$)
      )
      .subscribe(
        (conf: SnackBarConfiguration) => {
          const { message, action, duration } = conf;
          this.open(message, action, duration);
        }
      );
  }

  ngOnDestroy() {
    if (this.snackBarSubscription) {
      this.snackBarSubscription.unsubscribe();
    }
    if (this.snackBarDismissedSubscription) {
      this.snackBarDismissedSubscription.unsubscribe();
    }
  }

  open(message: string, action: string, duration: number = 2000) {
    this.snackBarDismissedSubscription = this.snackBar
      .open(message, action, { duration })
      .afterDismissed().subscribe(() => {
        this.sandbox.resetSnackBar();
        this.snackBarDismissedSubscription.unsubscribe();
      });
  }
}
