import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialCovalentModule } from '@llecoop';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CardContentFormComponent } from './card-content-form.component';


@NgModule({
  declarations: [ CardContentFormComponent ],
  imports: [
    CommonModule, ReactiveFormsModule,
    FlexLayoutModule,
    MaterialCovalentModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  exports: [ CardContentFormComponent ]
})
export class CardContentFormModule {
}
