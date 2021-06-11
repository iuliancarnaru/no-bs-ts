interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistence {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  // member visibility
  // private db: Record<string, string> = {};
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistence
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB<number, string>();
myDB.set('foo', 205);
// myDB.db['foo'] = 'baz'; --> Property 'db' is private and only accessible within class 'InMemoryDatabase'.
console.log(myDB.get('foo'));
const saved = myDB.saveToString();

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));
