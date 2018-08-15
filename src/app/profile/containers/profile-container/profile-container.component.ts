import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ProfileSandbox } from '../../sandbox/profile.sandbox';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html'
})
export class ProfileContainerComponent {
  fields: Array<FormlyFieldConfig> = this.sandbox.builder;
  model$ = this.sandbox.formProfile$;
  header$ = this.sandbox.headerProfile$;

  constructor(protected sandbox: ProfileSandbox) { }

}
