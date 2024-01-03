export interface UserViewInterface {
  about?: string;
  age: number;
  firstName: string;
  lastName?: string;
  photo: string;
}

export interface UserInterface extends UserViewInterface {
  id: number;
  hub: {
    hubId: number;
    hubName: string;
  };
  nickname: string;
}
