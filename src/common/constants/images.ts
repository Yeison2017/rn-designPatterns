import {
  BEHAVIOR_PATTERNS,
  CREATIONAL_PATTERNS,
  STRUCTURAL_PATTERNS,
} from "@/data";
import { ImageSourcePropType } from "react-native";

type PatternKeys =
  | keyof typeof CREATIONAL_PATTERNS
  | keyof typeof STRUCTURAL_PATTERNS
  | keyof typeof BEHAVIOR_PATTERNS;

export const IMAGE: { [key in PatternKeys]: ImageSourcePropType } = {
  // Creational patterns
  // factoryMethod: require("../../../assets/images/factoryMethod.png"),
  // abstractFactory: require("../../../assets/images/abstractFactory.png"),
  // builder: require("../../../assets/images/builder.png"),
  // prototype: require("../../../assets/images/prototype.png"),
  singleton: require("../../../assets/images/singleton.png"),

  // Structural patterns
  // adapter: require("../../../assets/images/adapter.png"),
  // bridge: require("../../../assets/images/bridge.png"),
  // composite: require("../../../assets/images/composite.png"),
  // decorator: require("../../../assets/images/decorator.png"),
  // facade: require("../../../assets/images/facade.png"),
  // flyweight: require("../../../assets/images/flyweight.png"),
  // proxy: require("../../../assets/images/proxy.png"),

  // Behavior patterns
  // chainOfResponsibility: require("../../../assets/images/chainOfResponsibility.png"),
  // command: require("../../../assets/images/command.png"),
  // iterator: require("../../../assets/images/iterator.png"),
  // mediator: require("../../../assets/images/mediator.png"),
  // memento: require("../../../assets/images/memento.png"),
  observer: require("../../../assets/images/observer.png"),
  // state: require("../../../assets/images/state.png"),
  strategy: require("../../../assets/images/strategy.png"),
  // templateMethod: require("../../../assets/images/templateMethod.png"),
  // visitor: require("../../../assets/images/visitor.png"),
};

export const IMAGE_EXAMPLE = {
  routeStrategy: "https://cdn-icons-png.flaticon.com/128/9245/9245193.png",
  youTubeObserver: "https://img.icons8.com/?size=100&id=25461&format=png",
};
