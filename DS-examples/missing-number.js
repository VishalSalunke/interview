// Find missing number in array of consecutive numbers
const { validateArray } = require("../utility");

const findMissingNumber = (arr) => {
  if (!validateArray(arr)) {
    return console.log("Please enter valid input");
  }
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10]));
