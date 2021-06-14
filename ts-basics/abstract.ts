abstract class StreetFighter {
  constructor() {}

  abstract get name(): string;

  move() {}

  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
}

// const ryu = new StreetFighter(); --> Cannot create an instance of an abstract class.

class Ryu extends StreetFighter {
  get name(): string {
    return 'Ryu';
  }

  getSpecialAttack(): string {
    return 'Hadoken';
  }
}

class ChungLi extends StreetFighter {
  get name(): string {
    return 'ChungLi';
  }

  getSpecialAttack(): string {
    return 'Lightning Kick';
  }
}

const ryu = new Ryu();
console.log(ryu.fight());

const chungLi = new ChungLi();
console.log(chungLi.fight());
