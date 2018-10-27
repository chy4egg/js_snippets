// the rest operator "..." converts arguments into array

function testRest(...numbers) {
  let total = 0;
  numbers.forEach(num => total += num);

  console.log(total);
  return total;
}

testRest(1,2,3,4,5); //15