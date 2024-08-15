import { DiscountStrategy } from "./discount.interface";

export class ShoppingCart {
  private discountStrategy: DiscountStrategy;

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  setStrategy(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculateTotal(price: number): number {
    return this.discountStrategy.calculate(price);
  }
}
