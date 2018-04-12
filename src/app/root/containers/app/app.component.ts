import { Component } from '@angular/core';
import { WarningTypeConfig, WarningTypes, WarningTypesConfigList } from '../../../shared/models';
import { AppSandbox } from '../../app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  warningType: WarningTypeConfig = WarningTypesConfigList[WarningTypes.Error];
  constructor(private sandBox: AppSandbox) {}
}
