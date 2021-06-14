// IMMUTABILITY

interface Cat {
  name: string;
  breed: string;
}

// 1. manual adding readonly
// interface Cat {
//   readonly name: string;
//   readonly breed: string;
// }

// 2. or using Readonly utility
// type ReadonlyCat = Readonly<Cat>;

// function makeCat(name: string, breed: string): ReadonlyCat {
//   return {
//     name,
//     breed,
//   };
// }

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const neko = makeCat('neko', 'british');

// neko.name = 'bacon'; --> Cannot assign to 'name' because it is a read-only property.

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 50);
// c1[0] = 19; --> Cannot assign to '0' because it is a read-only property.

const reallyConst = [1, 3, 4] as const;
// reallyConst[0] = 18; --> Cannot assign to '0' because it is a read-only property.
