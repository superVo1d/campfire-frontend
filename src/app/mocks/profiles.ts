import { MatchType, UsersInterface } from '../@types/users';

export const data: UsersInterface[] = [
  {
    id: '1',
    title: 'Миша, 16',
    photo: '/assets/media/mocks/mock-photo-1.png'
  },
  {
    id: '2',
    title: 'Аня, 17',
    photo: '/assets/media/mocks/mock-photo-2.png',
    match: MatchType.your
  },
  {
    id: '3',
    title: 'Лена, 32',
    photo: '/assets/media/mocks/mock-photo-3.png',
    match: MatchType.mutual
  },
  {
    id: '4',
    title: 'Женя, 33',
    photo: '/assets/media/mocks/mock-photo-4.png',
    match: MatchType.you
  },
  {
    id: '5',
    title: 'Лена, 25',
    photo: '/assets/media/mocks/mock-photo-5.png',
    match: MatchType.mutual
  },
  {
    id: '6',
    title: 'Катя, 24',
    photo: '/assets/media/mocks/mock-photo-6.png'
  }
];
