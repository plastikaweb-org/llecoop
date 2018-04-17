import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { uiThemes } from '../../../../config/theme';
import { Theme } from '../../../shared';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {
  @Output() emitTheme: EventEmitter<Theme> = new EventEmitter<Theme>();
  @Input() currentTheme: Theme;
  themes = uiThemes;

  changeTheme(theme: Theme): void {
    this.emitTheme.emit(theme);
  }
}
