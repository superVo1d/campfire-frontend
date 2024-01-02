import { UsersState } from './index';
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from './users.actions';

export const usersReducer = createReducer<UsersState>(
  { users: [] },
  on(loadUsers, (state) => {
    return { ...state };
  }),
  on(loadUsersSuccess, (state, action) => {
    return { ...state, users: action.users };
  })
);
