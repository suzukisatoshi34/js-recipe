const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 != 0) {
      console.log("Fizz");
    }
    if (n % 5 === 0 && n % 3 != 0) {
      console.log("Buzz");
    }
    if (n % 15 === 0) {
      console.log("FizzBuzz");
    }
    if (n % 3 != 0 && n % 5 != 0) {
      console.log(n);
    }
  }
};
