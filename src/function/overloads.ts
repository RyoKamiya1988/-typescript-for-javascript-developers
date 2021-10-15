export{};

// シグネチャで
// 型定義する
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string'){
    return value + value
  } else {
    // シグネチャで型定義しているのでここの記載はいらない
    throw 'Exception';
  }
}

console.log(double(100));
console.log(double('GO'));
// そもそもコンパイルエラーになる
// console.log(double(true));