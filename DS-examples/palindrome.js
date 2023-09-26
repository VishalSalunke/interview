const palindrome = (input) => {
  console.log(`Checking if the -> ${input} <- is a palindrome`);

  let str = input;
  if (typeof input === "number") {
    str = input.toString();
  }
  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return "It is palindrome";
  }
  return "It is not palindrome";
};

console.log(palindrome(121));
console.log(palindrome("refer"));
console.log(palindrome("example"));
console.log(palindrome(123456));
