export{};

let bmi = (height: number, weight: number) => {
  return weight / (height * height);
};
console.log(bmi(1.78, 86));

let bmi2: (height: number, weight: number) => number = (height: number, weight: number) => weight / (height * height);
console.log(bmi2(1.78, 86));