import { userReducer } from './user.reducer';
import { UserInterface } from '../../@types/user';
import { UsersInterface } from '../../@types/users';
import { usersReducer } from './users.reducer';

export interface UserState {
  user: UserInterface | null;
}

export interface UsersState {
  users: UsersInterface[];
}

export const reducers = {
  userReducer,
  usersReducer
};

export const selectUser = (state) => {
  return {
    ...state.userReducer.user,
    photo: state.userReducer.user?.photo || '/assets/media/images/no-userpic.png'
  };
};

export const selectUsers = (state) => {
  return state.usersReducer.users.map((user) => {
    return { ...user, photo: user.photo || '/assets/media/images/no-userpic.png' };
  });
};
