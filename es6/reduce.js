// Array.reduce() retains an interim value (сохраняет промежуточное значение) 
// as the first parameter.
// The second parameter is the current value
// With the reduce method we can do something with the current and accumulate values

const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((acc, curr) => acc + curr)); // 15

// 0) acc = 0, cur = 1
// 1) acc = 1, cur = 2
// 2) acc = 3, cur = 3
// 3) acc = 6, cur = 4
// 4) acc = 10, cur = 5
// and 10+5 on the last iteration === 15
