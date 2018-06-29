import { Warning } from './warning';

export interface ServerError extends Warning {
  code?: any;
  status?: any;
}
