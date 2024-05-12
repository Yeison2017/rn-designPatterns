// IStrategy
// Context
// ConcreteStrategyA
// ConcreteStrategyA1
import { StrategyAuth } from "./strategyAuth.interface";

export class LoginContext {
  private strategy: StrategyAuth;

  constructor(strategy: StrategyAuth) {
    this.strategy = strategy;
  }

  setStrategy(strategy: StrategyAuth) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}
