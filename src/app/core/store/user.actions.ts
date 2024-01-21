import { createAction, props } from '@ngrx/store';
import { UserEditable, UserInterface } from '../../@types/user';

export const UserActions = {
  LoadUser: 'LOAD_USER',
  LoadUserSuccess: 'LOAD_USER_SUCCESS',
  UpdateUser: 'UPDATE_USER',
  UpdateUserSuccess: 'UPDATE_USER_SUCCESS'
};

export const loadUser = createAction(UserActions.LoadUser);

export const loadUserSuccess = createAction(UserActions.LoadUserSuccess, props<{ user: UserInterface }>());

export const updateUser = createAction(UserActions.UpdateUser, props<{ values: UserEditable }>());

export const updateUserSuccess = createAction(UserActions.LoadUserSuccess, props<{ user: UserInterface }>());
