import { DesignPattern } from "@/common/interfaces";

export interface TypeDesignPattern {
  title: string;
  description: string;
  getDesignPatterns(): DesignPattern[];
}
