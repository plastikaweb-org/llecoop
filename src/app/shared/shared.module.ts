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
  return `Àquest camp ha de tenir ${field.templateOptions.minLength} caràcters com a mínim`;
}

export function maxlengthValidationMessage(err, field) {
  return `Aquest camp ha de tenir ${field.templateOptions.maxLength} caràcters com a màxim`;
}

export function minValidationMessage(err, field) {
  return `El valor ha de ser com a mínim ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `El valor ha de ser com a máxim ${field.templateOptions.max}`;
}

@NgModule({
  declarations: [ CardContentFormComponent, CapitalizePipe ],
  imports: [
    CommonModule, ReactiveFormsModule,
    FlexLayoutModule, MaterialCovalentModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Camp obligatori' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'email', message: 'Es requereix una adreça de correu vàlida' }
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
