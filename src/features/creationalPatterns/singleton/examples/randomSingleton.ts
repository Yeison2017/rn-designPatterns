class RandomSingleton {
  private static instance: RandomSingleton;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): RandomSingleton {
    if (!this.instance) {
      this.instance = new RandomSingleton();
    }

    return this.instance;
  }
}

export default RandomSingleton;
