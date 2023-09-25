const { validString } = require("../utility");

const reverseString = (str) => {
  if (!validString(str)) return "Please enter valid string";
  return str.split("").reverse().join("");
};

console.log(reverseString("example"));
console.log(reverseString(1214));
