interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

// Function Overloading in Typescript
function parseCoordinate(obj: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// unknown is like any but you have to cast it before you use it (safe any)
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coords: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coords[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else if (typeof arg1 === 'object') {
    coords = {
      ...(arg1 as Coordinate),
    };
  } else {
    coords = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coords;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 31, y: 55 }));
console.log(parseCoordinate('x:12,y:15'));
