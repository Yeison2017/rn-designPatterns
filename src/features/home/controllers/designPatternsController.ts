import {
  BEHAVIOR_PATTERNS,
  CREATIONAL_PATTERNS,
  DESIGN_PATTERNS,
  STRUCTURAL_PATTERNS,
  TYPES_DESIGN_PATTERNS,
} from "@/data";
import { IMAGE } from "@/common/constants";
import { RootStackAppParams } from "@/navigation/interfaces";
import { TypesDesignPatterns } from "@/common/interfaces";
import CreationalPatterns from "@/features/typeDesignPattern/controllers/creationalPatterns";
import BehaviorPatterns from "@/features/typeDesignPattern/controllers/behaviorPatterns";
import StructuralPatterns from "@/features/typeDesignPattern/controllers/structuralPatterns";
import { TypeDesignPattern } from "@/features/typeDesignPattern/controllers";

class DesignPatternsController {
  creationalPatterns = new CreationalPatterns();
  structuralPatterns = new StructuralPatterns();
  behaviorPatterns = new BehaviorPatterns();

  constructor() {}

  getTypesDesignPatterns(): string[] {
    const typesDesignPatterns = Object.values(TYPES_DESIGN_PATTERNS);
    return typesDesignPatterns;
  }

  getDesignPatterns(): TypesDesignPatterns[] {
    const patternMapping = {
      [TYPES_DESIGN_PATTERNS.creationalPatterns]: CREATIONAL_PATTERNS,
      // [TYPES_DESIGN_PATTERNS.structuralPatterns]: STRUCTURAL_PATTERNS,
      [TYPES_DESIGN_PATTERNS.behaviorPatterns]: BEHAVIOR_PATTERNS,
    };

    return Object.keys(patternMapping).map((typeKey) => {
      const patterns = Object.entries(
        patternMapping[typeKey as keyof typeof patternMapping]
      ).map(([nameKey, name]) => ({
        name,
        image: IMAGE[nameKey as keyof typeof IMAGE],
      }));

      return {
        typDesignPatterns: typeKey,
        designPatterns: patterns,
      };
    });
  }

  getTypeDesignPattern(typDesignPatterns: string): TypeDesignPattern {
    if (typDesignPatterns === TYPES_DESIGN_PATTERNS.creationalPatterns)
      return this.creationalPatterns;
    if (typDesignPatterns === TYPES_DESIGN_PATTERNS.structuralPatterns)
      return this.structuralPatterns;
    if (typDesignPatterns === TYPES_DESIGN_PATTERNS.behaviorPatterns)
      return this.behaviorPatterns;

    return this.creationalPatterns;
  }

  getNavigationNameDesignPattern(
    designPatterns: string
  ): keyof RootStackAppParams {
    if (designPatterns === DESIGN_PATTERNS.singleton) return "Singleton";
    if (designPatterns === DESIGN_PATTERNS.strategy) return "Strategy";

    return "Singleton";
  }
}

export default DesignPatternsController;
