import { createAction, props } from '@ngrx/store';
import { UsersInterface } from '../../@types/users';

export const UsersActions = {
  LoadUsers: 'LOAD_USERS',
  LoadUsersSuccess: 'LOAD_USERS_SUCCESS',
  LikeUser: 'LIKE_USER',
  LikeUserSuccess: 'LIKE_USER_SUCCESS'
};

export const loadUsers = createAction(UsersActions.LoadUsers);

export const loadUsersSuccess = createAction(UsersActions.LoadUsersSuccess, props<{ users: UsersInterface[] }>());

export const likeUser = createAction(UsersActions.LikeUser, props<{ id: number }>());

export const likeUserSuccess = createAction(UsersActions.LikeUserSuccess, props<{ id: number }>());
