import { RouteStrategy } from "./route.interface";

export class WalkingStrategy implements RouteStrategy {
  buildRoute(origin: string, destination: string): string {
    return `Walking route from ${origin} to ${destination}`;
  }
}
