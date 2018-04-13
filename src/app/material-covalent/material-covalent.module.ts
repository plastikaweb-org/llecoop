import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule, CovalentExpansionPanelModule,
  CovalentLayoutModule, CovalentLoadingModule, CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule, CovalentNotificationsModule, CovalentPagingModule,
  CovalentSearchModule, CovalentStepsModule
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
  imports: [ MATERIAL_MODULES, COVALENT_MODULES ],
  exports: [ MATERIAL_MODULES, COVALENT_MODULES ]
})
export class MaterialCovalentModule {}
