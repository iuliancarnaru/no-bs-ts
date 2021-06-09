// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

// ENUMERATION
enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

// OR
// enum LoadingState {
//   beforeLoad,
//   loading,
//   loaded,
// }

const englishLoadingState = {
  [LoadingState.beforeLoad]: 'Before Load',
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// console.log(isLoading('dog')); --> Argument of type '"dog"' is not assignable to parameter of type 'LoadingState'.
console.log(isLoading(LoadingState.beforeLoad));

// LITERAL TYPES
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5 + 1);
  }
  return pip;
}

console.log(rollDice(3));

function sendEvent(name: 'checkout', data: { cartCount: number }): void;
function sendEvent(name: 'addToCart', data: { productID: number }): void;

function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent('addToCart', { productID: 12345 });
