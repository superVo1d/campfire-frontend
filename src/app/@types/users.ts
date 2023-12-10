export enum MatchType {
  you = 'you',
  your = 'your',
  mutual = 'mutual'
}

export interface UsersInterface {
  id: string;
  title: string;
  photo: string;
  match?: MatchType;
}
