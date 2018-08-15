import { Injectable } from '@angular/core';
import { Profile } from '@llecoop';
import { BaseSandbox } from '@llecoop/base.sandbox';
import { select, Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as fromStore from 'app/root/store';
import { Observable } from 'rxjs';
import { profileBuilder } from '../containers/form-builder/profile.builder';

@Injectable()
export class ProfileSandbox extends BaseSandbox {
  formProfile$: Observable<Partial<Profile>> = this.store.pipe(
    select(fromStore.getEditableProfile)
  );
  headerProfile$: Observable<Partial<Profile>> = this.store.pipe(
    select(fromStore.getHeaderCardProfile)
  );
  // form builders
  builder: FormlyFieldConfig[] = profileBuilder;

  constructor(
    protected rootStore: Store<fromStore.RootState>
  ) {
    super(rootStore);
  }

  // dispatchers

}
