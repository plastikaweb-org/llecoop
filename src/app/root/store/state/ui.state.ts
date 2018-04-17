import { Theme } from '../../../shared';

export interface UiState {
  theme: Theme;
}

export const initialUiState: UiState = {
  theme: Theme.Light
};
