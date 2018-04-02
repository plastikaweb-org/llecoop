import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CovalentDialogsModule, CovalentLayoutModule } from '@covalent/core';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatToolbarModule
];

const COVALENT_MODULES: any[] = [
  CovalentLayoutModule,
  CovalentDialogsModule
];


@NgModule({
  imports: [ MATERIAL_MODULES, COVALENT_MODULES ],
  exports: [ MATERIAL_MODULES, COVALENT_MODULES ]
})
export class MaterialCovalentModule {}
