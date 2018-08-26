import * as fromActions from './router.actions';

describe('Router Actions', () => {

  it('should create a Go action with queryParams', () => {
    const payload = {
      path: ['/home'],
      query: null,
      extras: { queryParams: { id: 1 } }
    };
    const action = new fromActions.Go(payload);
    expect({ ...action }).toEqual({ type: fromActions.GO, payload });
  });

  it('should create a Forward action', () => {
    const action = new fromActions.Forward();
    expect({ ...action }).toEqual({ type: fromActions.FORWARD });
  });

  it('should create a Back action', () => {
    const action = new fromActions.Back();
    expect({
      ...action
    }).toEqual({ type: fromActions.BACK });
  });
});
