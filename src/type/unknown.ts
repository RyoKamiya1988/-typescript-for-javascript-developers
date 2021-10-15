export {};

// 関数定義
const kansu = (): number => 43;

// 関数呼び出し
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// コンパイルエラー 
// let sumUnknow = numberUnknown + 10;

// typeofで型を取得できる
// console.log(typeof numberUnknown);

if (typeof numberUnknown === 'number') {
  let sumUnknow = numberUnknown + 10;
}