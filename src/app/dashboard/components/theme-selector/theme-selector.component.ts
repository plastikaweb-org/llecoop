import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {

  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
}
