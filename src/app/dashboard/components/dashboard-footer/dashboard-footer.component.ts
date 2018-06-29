import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppConfig } from '../../../../config';

@Component({
  selector: 'app-dashboard-footer',
  template: `
    <div layout="row" layout-align="start center">
      <span class="mat-caption">Fet amb <mat-icon class="text-md">favorite</mat-icon> per
      <a class="developer-link" [href]="config.developerLink" target="_blank">{{config.developer}}</a>,
      <span class="current-year"> {{config.year}}</span>&nbsp;
        <a class="owner-link" [href]="config.ownerLink" target="_blank">{{config.owner}}</a>.
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFooterComponent {
  @Input() config: AppConfig;
}
