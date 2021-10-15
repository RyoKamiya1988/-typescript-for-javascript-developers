export{} ;

enum Months {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

console.log(Months.Jan); 
console.log(Months.Feb);

enum Months2 {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

console.log(Months2.Jan); 
console.log(Months2.Feb);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF'
}

let white = COLORS.WHITE
console.log({white});

// 指定してないのでエラー
// COLORS.YELLOW;

// 途中で追加してあげることもできる
enum COLORS {
  BLACK = '#000000'
}