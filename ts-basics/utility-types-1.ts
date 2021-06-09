// PARTIAL
interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: 'Iulian',
      id: 3107,
      email: 'test@test.com',
    },
    {
      email: 'dontemail@test.com',
    }
  )
);

// REQUIRED
type RequiredMyUser = Required<MyUser>;

// PICK
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

// RECORD
// OMIT
// TYPES FROM FIELDS
type userWithoutID = Omit<MyUser, 'id'>;

const mapById = (users: MyUser[]): Record<MyUser['id'], userWithoutID> => {
  return users.reduce((acc, val) => {
    const { id, ...other } = val;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mr. Baz' },
  ])
);
