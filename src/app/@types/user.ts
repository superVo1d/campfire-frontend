export interface UserViewInterface {
  about?: string;
  age: number;
  firstName: string;
  lastName?: string;
  photo: string;
}

export interface UserInterface extends UserViewInterface {
  id: number;
  hub: string;
  nickname: string;
}
