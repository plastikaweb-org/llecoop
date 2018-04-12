import { Warning } from '../../../shared';

export interface WarningState {
  visible: boolean;
  description?: Warning;
}

export const initialWarningState: WarningState = {
  visible: false
};
