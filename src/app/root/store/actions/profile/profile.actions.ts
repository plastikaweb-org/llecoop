import { Profile } from '@llecoop/models/profile';
import { Action } from '@ngrx/store';

export const GET_PROFILE = '[Profile] Get Profile';
export const GET_PROFILE_FAIL = '[Profile] Get Profile Fail';
export const GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';


export class GetProfile implements Action {
  readonly type = GET_PROFILE;

  constructor(public payload: string) {}
}

export class GetProfileFail implements Action {
  readonly type = GET_PROFILE_FAIL;

  constructor(public payload: any) {}
}

export class GetProfileSuccess implements Action {
  readonly type = GET_PROFILE_SUCCESS;

  constructor(public payload: Profile) {}
}

export type ProfileActions = GetProfile | GetProfileFail | GetProfileSuccess;
