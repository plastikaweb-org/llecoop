import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule,
    MatProgressBarModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {
    CovalentCommonModule, CovalentDialogsModule, CovalentLayoutModule, CovalentMediaModule,
    CovalentMenuModule, CovalentMessageModule
} from '@covalent/core';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatMenuModule
];

const COVALENT_MODULES: any[] = [
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentDialogsModule,
  CovalentMessageModule,
  CovalentMenuModule,
  CovalentMediaModule
];

@NgModule({
  imports: [MATERIAL_MODULES, COVALENT_MODULES],
  exports: [MATERIAL_MODULES, COVALENT_MODULES]
})
export class MaterialCovalentModule {}
