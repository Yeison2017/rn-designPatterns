class DataBaseSingleton {
  private static instance: DataBaseSingleton;

  private constructor() {}

  static getInstance(): DataBaseSingleton {
    if (!DataBaseSingleton.instance) {
      DataBaseSingleton.instance = new DataBaseSingleton();
    }

    return DataBaseSingleton.instance;
  }

  public query(query: string): string {
    console.log(`Executing query: ${query}`);
    const response = [
      {
        name: "Juan",
        age: 20,
      },
      {
        name: "Pedro",
        age: 30,
      },
    ];

    return JSON.stringify(response, null, 2);
  }
}

export default DataBaseSingleton;
