import { AlertDescription, AlertTypes } from '@llecoop';
import * as fromActions from './alert.actions';

describe('Check Alert Actions', () => {
  it('should create a Show Alert Message action', () => {
    const payload: AlertDescription = {
      type: AlertTypes.Info,
      content: {
        message: 'alert',
        annexMessage: 'alert'
      }
    };
    const action = new fromActions.ShowAlert(payload);
    expect({ ...action }).toEqual({
      type: fromActions.SHOW_ALERT,
      payload
    });
  });
  it('should create a Reset Alert Message action', () => {
    const action = new fromActions.ResetAlert();
    expect({ ...action }).toEqual({
      type: fromActions.RESET_ALERT
    });
  });
});
