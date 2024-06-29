class DataRouteStrategy {
  descripcion: string;
  items: Array<{ label: string; value: string }>;

  constructor() {
    this.descripcion =
      "Este código resuelve el problema de generar rutas entre dos puntos utilizando diferentes métodos de transporte. Dependiendo del método de transporte configurado (como carretera, caminata o transporte público), el sistema puede crear y mostrar una ruta específica adecuada para ese modo de viaje. Así, el usuario puede obtener una ruta personalizada según el medio de transporte que elija.";

    this.items = [
      { label: "En automóvil", value: "road" },
      { label: "A pie", value: "walking" },
      { label: "Transporte público", value: "publicTransport" },
    ];
  }
}

export default DataRouteStrategy;
