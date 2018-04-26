import { Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const forgotBuilder: FormlyFieldConfig[] = [
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
  }
];
