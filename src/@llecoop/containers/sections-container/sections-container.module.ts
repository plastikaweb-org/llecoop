import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialCovalentModule } from '@llecoop';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SectionsContainerComponent } from './sections-container.component';


@NgModule({
  declarations: [ SectionsContainerComponent ],
  imports: [
    CommonModule, ReactiveFormsModule,
    FlexLayoutModule,
    MaterialCovalentModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  exports: [ SectionsContainerComponent ]
})
export class SectionsContainerModule {
}
