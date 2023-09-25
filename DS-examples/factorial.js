const { validateNumber } = require("../utility");

const factorial = (n) => {
  if (!validateNumber(n)) {
    return "please enter valid input";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
