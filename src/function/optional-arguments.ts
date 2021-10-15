export{};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, weight: number, printable?: boolean
) => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({bmi})
  }
  return bmi;
}

bmi(1.6, 70, false)