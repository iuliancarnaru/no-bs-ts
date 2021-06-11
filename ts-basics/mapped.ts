// Mapped Types in Typescript

// type MyFlexibleDogInfo = {
//   name: string;
// } & Record<string, string>;

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'Bobby',
  breed: 'Dalmatian',
  age: 22,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} &
  {
    [Property in keyof Type as `on${Capitalize<
      string & Property
    >}Delete`]?: () => void;
  };

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {}

const bobby: DogInfo = {
  name: 'Bobby',
  age: 12,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(bobby, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
