import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromState from '../state';
import * as fromAuth from './auth/auth.reducer';
import * as fromUi from './ui/ui.reducer';
import * as fromProfile from './profile/profile.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  title: { key: string, placeholderType?: string };
}

export interface RootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  auth: fromState.AuthState;
  ui: fromState.UiState;
  profile: fromState.ProfileState;
}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
  auth: fromAuth.reducer,
  ui: fromUi.reducer,
  profile: fromProfile.reducer
};

// Feature selectors
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
export const getAuthState = createFeatureSelector<fromState.AuthState>('auth');
export const getUiState = createFeatureSelector<fromState.UiState>('ui');
export const getProfileState = createFeatureSelector<fromState.ProfileState>('profile');

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    const title = state.data[ 'title' ];
    return { url, params, queryParams, title };
  }
}
