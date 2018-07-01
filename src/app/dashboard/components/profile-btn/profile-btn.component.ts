import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Profile } from '@llecoop';

@Component({
  selector: 'app-profile-btn',
  templateUrl: './profile-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBtnComponent {
  @Input() profileMenu: string;
  @Input() basicProfile: Partial<Profile>;
}
