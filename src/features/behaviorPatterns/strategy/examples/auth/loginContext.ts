// IStrategy
// Context
// ConcreteStrategyA
// ConcreteStrategyA1

import { StrategyAuth } from "./strategyAuth.interface";

export class LoginContext {
  private strategy: StrategyAuth | any;

  constructor(strategy: StrategyAuth) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: StrategyAuth) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}
