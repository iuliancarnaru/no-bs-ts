class Doggy {
  // members in constructor
  constructor(public readonly name: string, public age: number) {}
}

const lg = new Doggy('Lg', 10);
// lg.name = 'foo'; --> Cannot assign to 'name' because it is a read-only property.
console.log(lg.name);

// singleton
class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

// only one DogList instance
DogList.addDog(lg);
console.log(DogList.instance.getDogs());
// const dl = new DogList(); --> Constructor of class 'DogList' is private and only accessible within the class declaration.
