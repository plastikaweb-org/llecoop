import { ServerError } from '@llecoop';

export interface ErrorState {
  visible: boolean;
  description?: ServerError;
}

export const initialErrorState: ErrorState = {
  visible: false
};
