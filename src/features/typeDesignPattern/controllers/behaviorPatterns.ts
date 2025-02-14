import { IMAGE } from "@/common/constants";
import { DesignPattern } from "@/common/interfaces";
import {
  DESCRIPTION_DESIGN_PATTERNS,
  DESCRIPTION_TYPES_DESIGN_PATTERNS,
  DESIGN_PATTERNS,
  TYPES_DESIGN_PATTERNS,
} from "@/data";
import { TypeDesignPattern } from "./typeDesignPattern.interface";

class BehaviorPatterns implements TypeDesignPattern {
  title: string;
  description: string;

  constructor() {
    this.title = TYPES_DESIGN_PATTERNS.behaviorPatterns;
    this.description = DESCRIPTION_TYPES_DESIGN_PATTERNS.behaviorPatterns;
  }

  getDesignPatterns(): DesignPattern[] {
    const designPatterns: DesignPattern[] = [
      {
        name: DESIGN_PATTERNS.strategy,
        description: DESCRIPTION_DESIGN_PATTERNS.strategy,
        image: IMAGE.strategy,
      },
    ];
    return designPatterns;
  }
}

export default BehaviorPatterns;
