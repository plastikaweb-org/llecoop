import { Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const loginBuilder: FormlyFieldConfig[] = [
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
      label: 'clau',
      placeholder: 'clau',
      required: true,
      minLength: 8
    }
  }
];
