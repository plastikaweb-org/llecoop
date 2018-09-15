import { FormlyFieldConfig } from '@ngx-formly/core';

export const resetBuilder: FormlyFieldConfig[] = [
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
