import { RouteStrategy } from "./route.interface";

export class PublicTransportStrategy implements RouteStrategy {
  buildRoute(origin: string, destination: string): string {
    return `Public transport route from ${origin} to ${destination}`;
  }
}
