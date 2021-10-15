export {};

type Mojiretus = string;

const fooString: string = 'Hellow';
const fooMojiretsu: Mojiretus ='Hellow';

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};

// example1を逆コンパイルしてエイリアスするイメージ
type Profile2 = typeof example1;