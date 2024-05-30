import { DesignPattern } from "@/common/interfaces";

type typeDesignPattern = Omit<DesignPattern, "description">;

export interface TypesDesignPatterns {
  typDesignPatterns: string;
  designPatterns: typeDesignPattern[];
}
