import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme, UiTheme } from '@llecoop';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {
  @Output() emitTheme: EventEmitter<Theme> = new EventEmitter<Theme>();
  @Input() currentTheme: Theme;
  @Input() themes: UiTheme[] = [];

  changeTheme(theme: Theme): void {
    this.emitTheme.emit(theme);
  }
}
