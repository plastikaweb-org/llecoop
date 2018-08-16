import { FormlyFieldConfig } from '@ngx-formly/core';

export const profileBuilder: FormlyFieldConfig[] = [ {
  fieldGroupClassName: 'display-flex',
  fieldGroup: [
    {
      className: 'flex-1',
      key: 'name',
      type: 'input',
      templateOptions: { type: 'text', placeholder: 'nom', required: true }
    },
    {
      className: 'flex-1',
      key: 'secondName',
      type: 'input',
      templateOptions: { type: 'text', placeholder: 'cognom(s)', required: true }
    },
    {
      className: 'flex-1',
      key: 'email',
      type: 'input',
      templateOptions: { type: 'text', placeholder: 'email', required: true }
    }
  ]
},
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        className: 'flex-1',
        key: 'address',
        type: 'input',
        templateOptions: { type: 'text', placeholder: 'adreça', required: true }
      },
      {
        className: 'flex-1',
        key: 'city',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: 'ciutat / barri',
          required: true
        }
      },
      {
        className: 'flex-1',
        key: 'cp',
        type: 'input',
        templateOptions: { type: 'text', placeholder: 'CP', required: true }
      },
      {
        className: 'flex-1',
        key: 'phone',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: 'telèfon',
          required: true
        }
      }
    ]
  }
];
