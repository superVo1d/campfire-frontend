import { loadUser, loadUserSuccess, updateUser } from './user.actions';
import { UserState } from './index';
import { createReducer, on } from '@ngrx/store';
import { UserEditable } from '../../@types/user';

export const userReducer = createReducer<UserState>(
  { user: undefined, isLoaded: false },
  on(loadUser, (state) => {
    return { ...state, isLoaded: false };
  }),
  on(loadUserSuccess, (state, action) => {
    return { ...state, user: action.user, isLoaded: true };
  }),
  on(updateUser, (state, action: { values: UserEditable }) => {
    return {
      ...state,
      user: state.user && {
        ...state.user,
        age: action.values.age,
        about: action.values.about,
        workingName: action.values.name
      }
    };
  })
);
