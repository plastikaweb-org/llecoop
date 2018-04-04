import { MetaReducer } from '@ngrx/store';

const metaReducers: MetaReducer<any>[] = [];

export const environment = {
  production: true,
  imports: [],
  metaReducers: { metaReducers }
};
