export interface StrategyAuth {
  login(user: string, password: string): boolean;
}
