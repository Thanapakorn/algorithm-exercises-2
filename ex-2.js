function countPositivesSumNegatives(input) {
  let num1;
  let num2;
  if (!Array.isArray(input) || input === null) {
    return [];
  } else {
    num1 = input
      .filter((num) => num > 0)
      .reduce((result, num) => result + num, 0);
    num2 = input
      .filter((num) => num < 0)
      .reduce((result, num) => result + num, 0);
    return [num1, num2];
  }
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
