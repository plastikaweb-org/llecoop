import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { filter, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { ActivitySandbox } from '../../activity.sandbox';
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
    this.snackBarSubscription.unsubscribe();
    this.snackBarDismissedSubscription.unsubscribe();
  }

  open(message: string, action: string, duration: number = 2000) {
    const ref = this.snackBar.open(message, action, { duration });
    this.snackBarDismissedSubscription = ref.afterDismissed().subscribe(() => {
      this.sandbox.resetSnackBar();
      this.snackBarDismissedSubscription.unsubscribe();
    });
  }
}
