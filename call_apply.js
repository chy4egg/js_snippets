/*
 * Function.apply(context, arguments)
 * принимает 2 аргумента.
 * @param 1 - контект (this будет ссылаться на него)
 * @param 2 - массив аргументов, который будет преобразован в arguments
 */

// определение функции
const sayHi = who => `Hello ${who}`

console.log(sayHi()) // "Hello undefined"
sayHi('world') // "Hello world"

console.log(sayHi.apply(null, ['hello', 'hello2', 'hello3'])) // "Hello hello"
// так как функция sayHi принимает только 1 агрумент, остальные будут отброшены

/*
 * Function.call(context, argument)
 * принимает 2 аргумента.
 * @param 1 - контект (this будет ссылаться на него)
 * @param 2 - аргумент, который будет передан функции
 */

// в ES5 можно было с помощью [].join.call(arguments, 'params') вызывать у arguments
// методы массива, например join() или  slice()
// в ES6 это делается с помощью оператора ...rest
const printArgs = (...args) => args.join(':')

console.log(printArgs(1, 2, 3)) // 1:2:3
