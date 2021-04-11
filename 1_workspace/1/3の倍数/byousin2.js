const genkiFunction = function () {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  n = 0;
  const countup = function () {
    n += 1;
    if (
      n % 3 === 0 &&
      n % 10 != 3 &&
      n - (n % 10) != 30 &&
      n - (n % 100) != 300
    ) {
      console.log(n + "!!!!!!!");
    }
    if (n % 10 === 3 && n - (n % 10) != 30 && n - (n % 100) != 300) {
      console.log(n + "!!!!!!!");
    }
    if (n - (n % 10) === 30 && n - (n % 100) != 300) {
      console.log(n + "!!!!!!!");
    }
    if (n - (n % 100) === 300) {
      console.log(n + "!!!!!!!");
    }
    if (
      n % 3 != 0 &&
      n % 10 != 3 &&
      n - (n % 10) != 30 &&
      n - (n % 100) != 300
    ) {
      console.log(n);
    }
  };
  setInterval(countup, 1000);
};
