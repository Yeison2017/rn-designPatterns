import { RouteStrategy } from "./route.interface";

export class NavigatorContext {
  private routeStrategy: RouteStrategy | undefined;

  setRouteStrategy(strategy: RouteStrategy) {
    this.routeStrategy = strategy;
  }

  buildRoute(origin: string, destination: string): string {
    if (this.routeStrategy) {
      return this.routeStrategy.buildRoute(origin, destination);
    } else {
      return "No route strategy set.";
    }
  }
}
