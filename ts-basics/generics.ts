function genericStringState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [() => val, (v: T) => (val = v)];
}

const [st1getter, st1setter] = genericStringState('hello');
const [st2getter, st2setter] = genericStringState(10);
const [st3getter, st3setter] = genericStringState<string | null>(null);
st3setter('hello');

// -------------------------------

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20,
  },
  {
    name: 'Pikachu',
    hp: 500,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
