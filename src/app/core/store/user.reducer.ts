import { loadUser, loadUserSuccess } from './user.actions';
import { UserState } from './index';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer<UserState>(
  { user: undefined, isLoaded: false },
  on(loadUser, (state) => {
    return { ...state, isLoaded: false };
  }),
  on(loadUserSuccess, (state, action) => {
    return { ...state, user: action.user, isLoaded: true };
  })
);
