/*
Стратегия как функция
Встроенный класс FUNCTION обеспечивает отличный способ для инкапсуляции алгоритма. А это значит что функции могут быть использованы в качестве стратегий. Просто передайте функцию клиенту и убедитесь, что он клиент её использует.

Проиллюстрируем это на примере. Допустим, мы хотим создать класс Greeter. Его задача — приветствовать людей. А так же мы хотим, чтобы Greeter умел приветствовать их по-разному. То есть, нам нужно несколько разных реализаций алгоритма. Для этого мы создадим различные стратегии приветствия. Здесь и далее, под алгоритмом подразумевается приветствие.
*/

// Greeter - класс объектов, которые могут приветствовать людей.
// Он может выучить различные способы приветствия через стратегии
var Greeter = function(strategy) {
  this.strategy = strategy;
};

// Greeter содержит функцию greet,
// которая будет использоваться для приветствия людей
// через стратегии, переданные в конструктор
Greeter.prototype.greet = function() {
  return this.strategy();
};

// Так как функция инкапсулирует алгоритм,
// она отличный кандидат на роль стратегии

// Немного стратегий:
var politeGreetingStrategy = function() {
  console.log("Hello.");
};

var friendlyGreetingStrategy = function() {
  console.log("Hey!");
};

var boredGreetingStrategy = function() {
  console.log("sup.");
};

// Давайте используем их!
var politeGreeter = new Greeter(politeGreetingStrategy);
var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
var boredGreeter = new Greeter(boredGreetingStrategy);

console.log(politeGreeter.greet()); //=> Hello.
console.log(friendlyGreeter.greet()); //=> Hey!
console.log(boredGreeter.greet()); //=> sup.