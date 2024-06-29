export interface IUser {
  id: number;
  name: string;
  lastName: string;
}

export type typeUser = IUser | null;

export class UserService {
  private static instance: UserService;
  private user: typeUser = null;

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public setUser(user: IUser): void {
    this.user = user;
  }

  public getUser(): typeUser {
    return this.user;
  }
}
