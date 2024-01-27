import { userReducer } from './user.reducer';
import { UserInterface } from '../../@types/user';
import { UsersInterface } from '../../@types/users';
import { usersReducer } from './users.reducer';
import { placeholderText } from '../../mocks/profiles';

export interface UserState {
  user: UserInterface | undefined;
  isLoaded: boolean;
}

export interface UsersState {
  users: UsersInterface[] | undefined;
  isLoaded: boolean;
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
  return state.usersReducer.users
    ?.map((user) => {
      return {
        ...user,
        photo: user.photo || '/assets/media/images/no-userpic.png',
        about: user.about || placeholderText(user.workingName)
      };
    })
    .sort(() => Math.random() - 0.5);
};

export const isLoading = (state) => {
  return !(state.usersReducer.isLoaded && state.userReducer.isLoaded);
};
