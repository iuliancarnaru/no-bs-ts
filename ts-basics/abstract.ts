abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

// const ryu = new StreetFighter(); --> Cannot create an instance of an abstract class.

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken';
  }

  get name(): string {
    return 'Ryu';
  }
}

class ChungLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Lightning Kick';
  }

  get name(): string {
    return 'ChungLi';
  }
}

const ryu = new Ryu();
console.log(ryu.fight());

const chungLi = new ChungLi();
console.log(chungLi.fight());
