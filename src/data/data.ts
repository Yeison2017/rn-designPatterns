export const TYPES_DESIGN_PATTERNS = {
  creationalPatterns: "Patrones creacionales",
  structuralPatterns: "Patrones estructurales",
  behaviorPatterns: "Patrones de comportamiento",
};

export const CREATIONAL_PATTERNS = {
  // factoryMethod: "Factory Method",
  // abstractFactory: "Abstract Factory",
  // builder: "Builder",
  // prototype: "Prototype",
  singleton: "Singleton",
};

export const STRUCTURAL_PATTERNS = {
  adapter: "Adapter",
  bridge: "Bridge",
  composite: "Composite",
  decorator: "Decorator",
  facade: "Facade",
  flyweight: "Flyweight",
  proxy: "Proxy",
};

export const BEHAVIOR_PATTERNS = {
  // chainOfResponsibility: "Chain of Responsibility",
  // command: "Command",
  // iterator: "Iterator",
  // mediator: "Mediator",
  // memento: "Memento",
  // observer: "Observer",
  // state: "State",
  strategy: "Strategy",
  // templateMethod: "Template Method",
  // visitor: "Visitor",
};

export const DESIGN_PATTERNS = {
  ...CREATIONAL_PATTERNS,
  ...STRUCTURAL_PATTERNS,
  ...BEHAVIOR_PATTERNS,
};

export const DESCRIPTION_TYPES_DESIGN_PATTERNS: Record<
  keyof typeof TYPES_DESIGN_PATTERNS,
  string
> = {
  creationalPatterns:
    "Los patrones creacionales proporcionan varios mecanismos de creación de objetos que incrementan la flexibilidad y la reutilización del código existente.",
  structuralPatterns:
    "Los patrones estructurales explican cómo ensamblar objetos y clases en estructuras más grandes, a la vez que se mantiene la flexibilidad y eficiencia de estas estructuras.",
  behaviorPatterns:
    "Los patrones de comportamiento tratan con algoritmos y la asignación de responsabilidades entre objetos.",
};

export const DESCRIPTION_DESIGN_PATTERNS: Record<
  keyof typeof DESIGN_PATTERNS,
  string
> = {
  strategy: "",
  adapter: "",
  bridge: "",
  composite: "",
  decorator: "",
  facade: "",
  flyweight: "",
  proxy: "",
  singleton:
    "Permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.",
};
