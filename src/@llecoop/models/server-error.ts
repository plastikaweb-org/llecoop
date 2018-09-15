import { Alert } from './alert';

export interface ServerError extends Alert {
  code?: any;
  status?: any;
}
