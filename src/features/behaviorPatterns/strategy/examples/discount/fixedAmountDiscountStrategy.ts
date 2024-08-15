import { DiscountStrategy } from "./discount.interface";

export class FixedAmountDiscountStrategy implements DiscountStrategy {
  private discountAmount: number;

  constructor(discountAmount: number) {
    this.discountAmount = discountAmount;
  }

  calculate(price: number): number {
    return price - this.discountAmount;
  }
}
