import { addNumbers, addStrings, getName } from './functions';

console.log(addNumbers(1, 2));

// console.log(addNumbers(1, 'Iulian'));
//Argument of type 'string' is not assignable to parameter of type 'number'

console.log(addStrings('a'));

console.log(getName({ first: 'Iulian', last: 'Carnaru' }));
