const fibonacciSeries = (num) => {
  let n1 = 0;
  let n2 = 1;
  let nextSum = 0;
  for (let i = 0; i <= num; i++) {
    console.log(n1);
    nextSum = n1 + n2;
    n1 = n2;
    n2 = nextSum;
  }
};

fibonacciSeries(8);
