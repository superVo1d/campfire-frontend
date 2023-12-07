import { ProfileInterface } from '../@types/profile';

export const data: ProfileInterface[] = [
  {
    id: '1',
    title: 'Миша, 16',
    photo: '/assets/media/mocks/mock-photo-1.png',
    match: false
  },
  {
    id: '2',
    title: 'Аня, 17',
    photo: '/assets/media/mocks/mock-photo-2.png',
    match: false
  },
  {
    id: '3',
    title: 'Лена, 32',
    photo: '/assets/media/mocks/mock-photo-3.png',
    match: true
  },
  {
    id: '4',
    title: 'Женя, 33',
    photo: '/assets/media/mocks/mock-photo-4.png',
    match: false
  },
  {
    id: '5',
    title: 'Лена, 25',
    photo: '/assets/media/mocks/mock-photo-5.png',
    match: true
  },
  {
    id: '6',
    title: 'Катя, 24',
    photo: '/assets/media/mocks/mock-photo-6.png',
    match: false
  }
];
