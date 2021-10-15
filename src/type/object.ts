export {};

let profile1: object = {name: 'Ham'};
profile1 = {birthYear: 1978};

let profile2:{
  name: string;
} = {name: 'Ham'};
// アノテーションを宣言できたので↓はエラーになる
// profile2 = {birthYear: 1978};
profile2 ={name: 'kamiya'};