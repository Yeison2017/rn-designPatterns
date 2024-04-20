class Singleton {
  private static instance: Singleton;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

export default Singleton;
