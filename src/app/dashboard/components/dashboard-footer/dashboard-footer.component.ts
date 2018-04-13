import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppConfig } from '../../../../conf/config';

@Component({
  selector: 'app-dashboard-footer',
  template: `
    <div layout="row" layout-align="start center">
      <span class="mat-caption">Fet amb <mat-icon class="text-md">favorite</mat-icon> per
      <a [href]="config.developerLink" target="_blank">{{config.developer}}</a>, {{config.year}}
      <a [href]="config.ownerLink" target="_blank">{{config.owner}}</a>.</span>
    </div>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFooterComponent {
  @Input() config: AppConfig;
}
