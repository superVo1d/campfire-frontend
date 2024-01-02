import { loadUser, loadUserSuccess } from './user.actions';
import { UserState } from './index';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer<UserState>(
  { user: null },
  on(loadUser, (state) => {
    return { ...state };
  }),
  on(loadUserSuccess, (state, action) => {
    return { ...state, user: action.user };
  })
);
