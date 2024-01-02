import { UsersState } from './index';
import { createReducer, on } from '@ngrx/store';
import { likeUser, loadUsers, loadUsersSuccess } from './users.actions';
import { UsersInterface } from '../../@types/users';

export const usersReducer = createReducer<UsersState>(
  { users: [] },
  on(loadUsers, (state) => {
    return { ...state };
  }),
  on(loadUsersSuccess, (state, action) => {
    return { ...state, users: action.users };
  }),
  on(likeUser, (state, action) => {
    return {
      ...state,
      users: state.users.map((user: UsersInterface) => {
        return { ...user, like: user.id === action.id ? !user.like : user.like };
      })
    };
  })
);
