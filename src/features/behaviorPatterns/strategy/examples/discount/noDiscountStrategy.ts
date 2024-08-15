import { DiscountStrategy } from "./discount.interface";

export class NoDiscountStrategy implements DiscountStrategy {
  calculate(price: number): number {
    return price;
  }
}
