import { Theme } from '@llecoop';

export interface UiState {
  theme: Theme;
}

export const initialUiState: UiState = {
  theme: Theme.Light
};
