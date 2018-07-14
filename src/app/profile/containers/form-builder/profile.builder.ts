import { FormlyFieldConfig } from '@ngx-formly/core';

export const profileBuilder: FormlyFieldConfig[] = [ {
  fieldGroupClassName: 'display-flex',
  fieldGroup: [
    {
      className: 'flex-1',
      key: 'title',
      type: 'input',
      templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.TITLE'), required: false }
    },
    {
      className: 'flex-1',
      key: 'normalizedTitle',
      type: 'input',
      templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.NORMALIZED'), required: false }
    },
    {
      className: 'flex-1',
      key: 'xref',
      type: 'input',
      templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.XREF'), required: false }
    },
    {
      className: 'flex-1',
      key: 'contributorName',
      type: 'input',
      templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.CONTRIBUTOR'), required: false }
    }
  ]
},
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        className: 'flex-1',
        key: 'contributorId',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: this.translate.instant('WORKS.CONTRIBUTOR_ID'),
          required: false
        }
      },
      {
        className: 'flex-1',
        key: 'publisherName',
        type: 'input',
        templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.PUBLISHER'), required: false }
      },
      {
        className: 'flex-1',
        key: 'publisherId',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: this.translate.instant('WORKS.PUBLISHER_ID'),
          required: false
        }
      },
      {
        className: 'flex-1',
        key: 'text',
        type: 'input',
        templateOptions: { type: 'text', placeholder: this.translate.instant('WORKS.TEXT'), required: false }
      }
    ]
  }
];
