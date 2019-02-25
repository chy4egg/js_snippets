// Currying is translating a function from callable as f(a,b) into f(a)(b)

// example
function curry(func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    }
  }
}

// usage
function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3
