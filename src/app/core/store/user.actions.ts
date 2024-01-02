import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../@types/user';

export const UserActions = {
  LoadUser: 'LOAD_USER',
  LoadUserSuccess: 'LOAD_USER_SUCCESS'
};

export const loadUser = createAction(UserActions.LoadUser);

export const loadUserSuccess = createAction(UserActions.LoadUserSuccess, props<{ user: UserInterface }>());
