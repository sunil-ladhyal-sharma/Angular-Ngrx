import { createAction, props } from '@ngrx/store';
import { ACTION_CONSTANTS } from 'src/app/shared/constants/constants';
import { User } from 'src/app/shared/models/user.model';

export const loginStart = createAction(
  ACTION_CONSTANTS.AUTH_LOGIN_START,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(ACTION_CONSTANTS.AUTH_LOGIN_SUCCESS, props<{user:User}> ());
export const loginFail = createAction(ACTION_CONSTANTS.AUTH_LOGIN_FAIL)