function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator';
  }
}

console.log(calculate(10, 2, '+')); // Output: 12
console.log(calculate(10, 2, '-')); // Output: 8
console.log(calculate(10, 2, '*')); // Output: 20
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(10, 0, '/')); // Throws an error: Cannot divide by zero
console.log(calculate(10, 2, '%')); // Output: Invalid operator