export enum MatchType {
  you = 'you',
  your = 'your',
  mutual = 'mutual'
}

export interface UsersInterface {
  id: number;
  about?: string;
  firstName: string;
  lastName?: string;
  age?: number;
  photo?: string;
  nickname?: string;
  match?: MatchType;
}
