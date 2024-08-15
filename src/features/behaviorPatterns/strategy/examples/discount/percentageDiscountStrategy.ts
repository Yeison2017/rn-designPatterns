import { DiscountStrategy } from "./discount.interface";

export class PercentageDiscountStrategy implements DiscountStrategy {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  calculate(price: number): number {
    return (price * (price * this.percentage)) / 100;
  }
}
