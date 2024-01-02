import { MatchType, UsersInterface } from '../@types/users';

export const data: UsersInterface[] = [
  {
    id: 1,
    photo: '/assets/media/images/no-userpic.png',
    firstName: 'Гриша',
    about: 'Описание 1',
    lastName: 'Мыльников',
    age: 26,
    nickname: 'supervoid'
  },
  {
    id: 2,
    photo: '/assets/media/mocks/mock-photo-1.png',
    firstName: 'Миша',
    about: 'Описание 2',
    age: 16,
    nickname: 'username'
  },
  {
    id: 3,
    photo: '/assets/media/mocks/mock-photo-2.png',
    firstName: 'Аня',
    about: 'Описание 3',
    age: 17,
    nickname: 'username',
    match: MatchType.your
  },
  {
    id: 4,
    photo: '/assets/media/mocks/mock-photo-3.png',
    firstName: 'Лена',
    about: 'Описание 4',
    age: 32,
    nickname: 'username',
    match: MatchType.mutual
  },
  {
    id: 5,
    photo: '/assets/media/mocks/mock-photo-4.png',
    firstName: 'Женя',
    about: 'Описание 5',
    age: 33,
    nickname: 'username',
    match: MatchType.you
  },
  {
    id: 6,
    photo: '/assets/media/mocks/mock-photo-5.png',
    firstName: 'Лена',
    about: 'Описание 6',
    age: 25,
    nickname: 'username',
    match: MatchType.mutual
  },
  {
    id: 6,
    photo: '/assets/media/mocks/mock-photo-6.png',
    firstName: 'Катя',
    about: 'Описание 7',
    age: 24,
    nickname: 'username'
  }
];
