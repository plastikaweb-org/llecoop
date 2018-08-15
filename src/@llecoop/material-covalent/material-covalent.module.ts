import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule
} from '@covalent/core';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule
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
  imports: [ MATERIAL_MODULES, COVALENT_MODULES ],
  exports: [ MATERIAL_MODULES, COVALENT_MODULES ]
})
export class MaterialCovalentModule {}
