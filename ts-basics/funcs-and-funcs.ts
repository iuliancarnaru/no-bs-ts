export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (n: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const newMutateFunc: MutationFunction = (n: number) => n - 20;

console.log(arrayMutate([1, 2, 3], (n) => n * 10));

export type AdderFunction = (val: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
