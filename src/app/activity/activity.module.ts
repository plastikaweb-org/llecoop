import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@llecoop/shared.module';

import { ActivitySandbox } from './sandbox/activity.sandbox';
import { AlertComponent, ProgressBarComponent, SnackBarComponent } from './components';
import { effects, reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    // Shared
    SharedModule,
    // Store
    StoreModule.forFeature('activity', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [SnackBarComponent, ProgressBarComponent, AlertComponent],
  exports: [SnackBarComponent, ProgressBarComponent, AlertComponent],
  providers: [ActivitySandbox]
})
export class ActivityModule {}
