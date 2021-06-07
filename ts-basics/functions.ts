export function addNumbers(a: number, b: number): number {
  return a + b;
}

// function with default values
export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`;

// union type |
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// not returning anything from the function: void
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

declare var Promise: any;

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join(' ')}`;
};

// optional chaining operator ?
// null coalescing operator ??
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
