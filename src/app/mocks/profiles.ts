import { UsersInterface } from '../@types/users';

export const placeholderText = (name) =>
  `Привет, я ${name}. Живя в ритме мегаполиса, я часто скучаю по разговорам у костра и душевности – за этим я тут. Жду приятных знакомств для тёплых разговоров. Cкоро подробнее расскажу о своих занятиях, работе и хобби, ценностях в общении – а пока можешь спросить, что тебе интересно!`;

export const data: UsersInterface[] = [
  {
    id: 1,
    photo: '/assets/media/images/no-userpic.png',
    firstName: 'Гриша',
    about: 'Описание 1',
    lastName: 'Мыльников',
    age: 26,
    nickname: 'supervoid',
    workingName: 'Гриша'
  },
  {
    id: 2,
    photo: '/assets/media/mocks/mock-photo-1.png',
    firstName: 'Миша',
    about: 'Описание 2',
    age: 16,
    nickname: 'username',
    workingName: 'Миша'
  },
  {
    id: 3,
    photo: '/assets/media/mocks/mock-photo-2.png',
    firstName: 'Аня',
    about: 'Описание 3',
    age: 17,
    nickname: 'username',
    likesYou: true,
    workingName: 'Аня'
  },
  {
    id: 4,
    photo: '/assets/media/mocks/mock-photo-3.png',
    firstName: 'Лена',
    about: 'Описание 4',
    age: 32,
    nickname: 'username',
    like: true,
    likesYou: true,
    workingName: 'Лена'
  },
  {
    id: 5,
    photo: '/assets/media/mocks/mock-photo-4.png',
    firstName: 'Женя',
    about: 'Описание 5',
    age: 33,
    nickname: 'username',
    likesYou: true,
    workingName: 'Женя'
  },
  {
    id: 6,
    photo: '/assets/media/mocks/mock-photo-5.png',
    firstName: 'Лена',
    about: 'Описание 6',
    age: 25,
    nickname: 'username',
    like: true,
    likesYou: true,
    workingName: 'Лена'
  },
  {
    id: 6,
    photo: '/assets/media/mocks/mock-photo-6.png',
    firstName: 'Катя',
    about: 'Описание 7',
    age: 24,
    nickname: 'username',
    workingName: 'Катя'
  }
];
