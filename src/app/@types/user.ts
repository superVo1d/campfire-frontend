export interface UserViewInterface {
  about?: string;
  age: string;
  name: string;
  photo: string;
}

export interface UserInterface extends UserViewInterface {
  id: string;
  hub: string;
  nickname: string;
}
