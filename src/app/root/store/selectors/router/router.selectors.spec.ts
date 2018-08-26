import * as fromSelectors from './router.selectors';

describe('Router selectors', () => {

  it('should return Router Url', () => {
    expect(fromSelectors.gerRouterUrl.projector({ state: { url: 'home' } })).toBe('home');
  });

  it('should return Router Params', () => {
    expect(fromSelectors.getRouterParams.projector({
      state: {
        url: 'home',
        params: { key: '______' }
      }
    })).toEqual({ key: '______' });
  });

  it('should return Router QueryParams', () => {
    expect(fromSelectors.getRouterQueryParams.projector({
      state: {
        url: 'home',
        queryParams: { id: 2 }
      }
    })).toEqual({ id: 2 });
  });
});
