// Given in array of integers find two number such that they add up to specific target
const { validateArray } = require("../utility");

const twoSum = (arr, target) => {
  if (!validateArray(arr)) {
    return console.log("Please enter valid input");
  }
  const tempObj = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (tempObj[complement] !== undefined) {
      return [complement, arr[i]];
    }
    tempObj[arr[i]] = i;
  }
  return "no match found";
};

console.log(twoSum([3, 5, 67, 24, 31, 43, 12], 46));
