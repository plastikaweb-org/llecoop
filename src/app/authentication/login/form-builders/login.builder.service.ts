import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class LoginBuilderService {
  private fieldConfig: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'email',
        placeholder: 'email',
        required: true
      },
      validators: {
        validation: Validators.compose(
          [ Validators.required, Validators.email ]
        )
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'password',
        placeholder: 'password',
        required: true,
        minLength: 8
      }
    }
  ];

  getBuilder(): FormlyFieldConfig[] {
    return this.fieldConfig;
  }

}
