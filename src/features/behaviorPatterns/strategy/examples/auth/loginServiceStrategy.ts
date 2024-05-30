import { StrategyAuth } from "./strategyAuth.interface";

export class LoginServiceStrategy implements StrategyAuth {
  login(user: string, password: string): boolean {
    if (user === "adminService" && password === "123") {
      return true;
    }

    return false;
  }
}
