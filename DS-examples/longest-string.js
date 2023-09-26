// find the longest substring without repeating character

const longestSubString = (str) => {
  const currentString = [];
  let maxSubStringLenth = 0;

  for (let i = 0; i < str.length; i++) {
    const position = currentString.indexOf(str[i]);
    if (position !== -1) {
      currentString.splice(0, position + 1);
    }
    currentString.push(str[i]);
    maxSubStringLenth = Math.max(currentString.length, maxSubStringLenth);
  }
  return maxSubStringLenth;
};

console.log(longestSubString("vishaldev"));
