// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other. Examples: Input: str1 = “listen” str2 = “silent”
const { validString } = require("../utility");

const anagramString = (str1, str2) => {
  if (!validString(str1) || !validString(str2)) {
    return "Please enter valid input";
  }
  const sortedString1 = str1.split("").sort().join("");
  const sortedString2 = str2.split("").sort().join("");
  return sortedString1 === sortedString2;
};

console.log(anagramString("listen", "silent"));
