// optional parameter ?
// you can't put a required parameter after a optional one
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
}

printIngredient('1C', 'flower');
printIngredient('1C', 'flower', 'white');

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// '!' is forcing to not use undefined on user.info.email
function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return '';
}

// null coalescing operator ??
function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

// Optional callback
function addWithCallback(x: number, y: number, callback: () => void) {
  console.log([x, y]);
  callback();
}
