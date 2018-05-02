import { Theme, UiTheme } from '../app/shared';
import { InjectionToken } from '@angular/core';

export const uiThemes: UiTheme[] = [
  {
    class: Theme.Light,
    icon: 'brightness_high',
    text: 'Estil lluminós'
  },
  {
    class: Theme.Dark,
    icon: 'brightness_low',
    text: 'Estil fosc'
  }
];

export const THEMES_TOKEN = new InjectionToken<UiTheme[]>('themes');
