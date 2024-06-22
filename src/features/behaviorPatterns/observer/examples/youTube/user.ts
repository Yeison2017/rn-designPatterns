import { Observer } from "./observer.interface";

class User implements Observer {
  private _name: string;
  private _notifications: string[] = [];

  constructor(name: string) {
    this._name = name;
  }

  update(videoTitle: string): void {
    const response = `${this._name} tienes nuevo video - ${videoTitle}`;
    this._notifications.push(response);
  }

  get name(): string {
    return this._name;
  }

  getNotifications(): string[] {
    return this._notifications;
  }
}

export default User;
