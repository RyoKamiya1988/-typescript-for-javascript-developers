export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result});
} catch (error) {
  console.log({error});
}

let foo: void = undefined;

// これはエラーがでる。
// let bar: never = undefined;
// let bar: never = null;

let bar: never = error('これだけはエラーにならない');