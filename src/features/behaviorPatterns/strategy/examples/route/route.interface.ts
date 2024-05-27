export interface RouteStrategy {
  buildRoute(origin: string, destination: string): string;
}
