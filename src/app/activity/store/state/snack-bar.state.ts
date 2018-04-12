export interface SnackBarConfiguration {
  message: string;
  action: string;
  duration: number;
}

export interface SnackBarState {
  visible: boolean;
  configuration?: SnackBarConfiguration;
}

export const initialSnackBarState: SnackBarState = {
  visible: false,
  configuration: null
};
