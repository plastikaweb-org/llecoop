import { AlertDescription } from '@llecoop';

export interface AlertState {
  visible: boolean;
  description?: AlertDescription;
}

export const initialAlertState: AlertState = {
  visible: false
};
