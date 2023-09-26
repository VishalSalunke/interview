const armStorngNumber = (n) => {
  let formattedNum = n.toString();
  const currentNum = [];
  const totalDigits = formattedNum.length;
  for (let i = 0; i < totalDigits; i++) {
    currentNum.push(Math.pow(formattedNum[i], totalDigits));
  }

  const total = currentNum.reduce((sum, num) => sum + num, 0);
  if (total === n) return `${n} is an armstrong number`;
  return `${n} is not an armstrong number`;
};

console.log(armStorngNumber(1634));
console.log(armStorngNumber(153));
console.log(armStorngNumber(88593477));
console.log(armStorngNumber(120));
