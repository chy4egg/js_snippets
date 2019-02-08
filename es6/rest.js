/* the rest operator "..." converts arguments into array */

function testRest(...numbers) {
  let total = 0;
  numbers.forEach(num => (total += num));

  return total;
}

console.log(testRest(1, 2, 3, 4, 5)); // 15
