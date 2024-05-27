import { RouteStrategy } from "./route.interface";

export class RoadStrategy implements RouteStrategy {
  buildRoute(origin: string, destination: string): string {
    return `Road route from ${origin} to ${destination}`;
  }
}
