import * as fromActions from './ui.actions';
import { Theme } from '../../../../shared';

describe('Check UI Actions', () => {
  it('should create a Load Theme action', () => {
    const action = new fromActions.LoadTheme();
    expect({ ...action }).toEqual({
      type: fromActions.LOAD_THEME
    });
  });
  it('should create a Change Theme action', () => {
    const payload = Theme.Dark;
    const action = new fromActions.ChangeTheme(payload);
    expect({ ...action }).toEqual({
      type: fromActions.CHANGE_THEME,
      payload
    });
  });
});
