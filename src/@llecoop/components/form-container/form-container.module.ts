import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [ FormContainerComponent ],
  imports: [
    CommonModule, ReactiveFormsModule,
    FlexLayoutModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  exports: [ FormContainerComponent ]
})
export class FormContainerModule {
}
