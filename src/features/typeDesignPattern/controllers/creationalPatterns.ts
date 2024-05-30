import { IMAGE } from "@/common/constants";
import { DesignPattern } from "@/common/interfaces";
import {
  DESCRIPTION_DESIGN_PATTERNS,
  DESCRIPTION_TYPES_DESIGN_PATTERNS,
  DESIGN_PATTERNS,
  TYPES_DESIGN_PATTERNS,
} from "@/data";
import { TypeDesignPattern } from "./typeDesignPattern.interface";

class CreationalPatterns implements TypeDesignPattern {
  title: string;
  description: string;

  constructor() {
    this.title = TYPES_DESIGN_PATTERNS.creationalPatterns;
    this.description = DESCRIPTION_TYPES_DESIGN_PATTERNS.creationalPatterns;
  }

  getDesignPatterns(): DesignPattern[] {
    const designPatterns: DesignPattern[] = [
      {
        name: DESIGN_PATTERNS.singleton,
        description: DESCRIPTION_DESIGN_PATTERNS.singleton,
        image: IMAGE.singleton,
      },
    ];
    return designPatterns;
  }
}

export default CreationalPatterns;
