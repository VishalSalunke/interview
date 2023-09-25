//remove duplicates from array
const { validateArray } = require("../utility");

const removeDuplicate = (arr) => {
  if (!validateArray(arr)) {
    return console.log("Please enter valid input");
  }
  return [...new Set(arr)];
};

const removeUsingFilter = (arr) => {
  if (!validateArray(arr)) {
    return console.log("Please enter valid input");
  }
  return arr.filter((element, index) => {
    return arr.indexOf(element) == index;
  });
};

console.log(removeDuplicate([2, 5, 6, 7, 3, 5, 3]));
console.log(removeUsingFilter([2, 5, 6, 7, 3, 5, 3]));
