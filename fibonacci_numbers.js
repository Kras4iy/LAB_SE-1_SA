function getFibonacciNumber(n) {
  let firstNumber = 0;
  let secondNumber = 1;

  const numbers = [0];

  for (let i = 0; i < n; i++) {
    const temp = firstNumber + secondNumber;

    firstNumber = secondNumber;
    secondNumber = temp;
    numbers.push(firstNumber);
  }

  return numbers;
}

console.log(...getFibonacciNumber(10))