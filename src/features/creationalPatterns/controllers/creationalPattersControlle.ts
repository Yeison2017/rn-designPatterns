import { IMAGE } from "@/common/constants";
import { Pattern, Patterns } from "@/common/interfaces";

class CreationalPattersControlle implements Patterns {
  title: string;
  description: string;
  patterns: Pattern[];

  constructor() {
    this.title = "Patrones creacionales";
    this.description =
      "Los patrones creacionales proporcionan varios mecanismos de creación de objetos que incrementan la flexibilidad y la reutilización del código existente.";
    this.patterns = [
      {
        name: "Factory Method",
        description:
          "Proporciona una interfaz para la creación de objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.",
        image: IMAGE.factoryMethod,
      },
      {
        name: "Abstract Factory",
        description:
          "Permite producir familias de objetos relacionados sin especificar sus clases concretas.",
        image: IMAGE.abstractFactory,
      },
    ];
  }
}

export default CreationalPattersControlle;
