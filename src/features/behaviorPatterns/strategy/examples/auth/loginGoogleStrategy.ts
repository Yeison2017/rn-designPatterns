import { StrategyAuth } from "./strategyAuth.interface";

export class LoginGoogleStrategy implements StrategyAuth {
  login(user: string, password: string): boolean {
    if (user === "adminGoogle" && password === "123") {
      return true;
    }

    return false;
  }
}
