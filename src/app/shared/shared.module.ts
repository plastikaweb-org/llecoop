import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialCovalentModule } from '../material-covalent/material-covalent.module';
import { CardContentFormComponent } from './components';
import { CapitalizePipe } from './pipes';

export function minlengthValidationMessage(err, field) {
  return `${field.templateOptions.minLength} caràcters com a mínim`;
}

export function maxlengthValidationMessage(err, field) {
  return `${field.templateOptions.maxLength} caràcters com a màxim`;
}

export function minValidationMessage(err, field) {
  return `com a mínim ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `com a máxim ${field.templateOptions.max}`;
}

@NgModule({
  declarations: [ CardContentFormComponent, CapitalizePipe ],
  imports: [
    CommonModule, ReactiveFormsModule,
    FlexLayoutModule, MaterialCovalentModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'camp obligatori' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'email', message: 'adreça de correu no vàlida' }
      ]
    }),
    FormlyMaterialModule
  ],
  exports: [
    CommonModule, FlexLayoutModule,
    MaterialCovalentModule, CardContentFormComponent,
    CapitalizePipe, ReactiveFormsModule,
    FormlyModule, FormlyMaterialModule
  ]
})
export class SharedModule {}
