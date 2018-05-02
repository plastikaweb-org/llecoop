export enum Theme {
  Light = 'theme-light',
  Dark = 'theme-dark'
}
export const themeKeys = Object.keys(Theme);

export interface UiTheme {
  class: Theme;
  icon: string;
  text: string;
}
