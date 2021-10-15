export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';

// 許容したくない文字が入ってきたときはエラーにしたい
dayOfTheWeek = '31';

let dayOfTheWeek2:　'日';
// これだと'日'以外がエラーになる
// dayOfTheWeek2 = '月';

// つまりこうすればいい
let dayOfTheWeek3:　'日' | '月' | '火' | '水' | '木' | '金' | '土';
dayOfTheWeek3 = '月';

let month = 1;
month = 2;
month = 13;

let TRUE: true = true;