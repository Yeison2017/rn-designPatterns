import { StrategyAuth } from "./strategyAuth.interface";

export class LoginDBStrategy implements StrategyAuth {
  login(user: string, password: string): boolean {
    if (user === "adminDB" && password === "123") {
      return true;
    }

    return false;
  }
}
