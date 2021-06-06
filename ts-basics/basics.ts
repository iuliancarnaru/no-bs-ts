let userName: string = 'Iulian';
let hasLoggedIn: boolean = true;

userName += 'Carnaru';

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

interface Person {
  firstName: string;
  lastName: string;
  // optional field
  cool?: boolean;
}

const person: Person = {
  firstName: 'Iulian',
  lastName: 'Carnaru',
  cool: true,
};

const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};

ids[30] = 'c';

if (ids[30] === 'd') {
  console.log('false');
}

// i is inferred as being a number
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 3, 5].forEach((number) => console.log(number));
const newArr = [2, 4, 6].map((number) => number * 20);
