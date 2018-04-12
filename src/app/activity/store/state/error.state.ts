import { ServerError } from '../../../shared';

export interface ErrorState {
  visible: boolean;
  description?: ServerError;
}

export const initialErrorState: ErrorState = {
  visible: false
};
