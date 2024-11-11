function fizzBuzz(n) {
  const newArr = [];
  let count = 1;
  while (count > 0 && count <= n) {
    if (count % 3 === 0 && count % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (count % 5 === 0) {
      newArr.push("Buzz");
    } else if (count % 3 === 0) {
      newArr.push("Fizz");
    } else {
      newArr.push(String(count));
    }
    count++;
  }
  return newArr;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
