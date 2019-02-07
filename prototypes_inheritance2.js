/*
  Конструкция наследования на прототипах. По сути, то же самое делают классы в ES6
*/

console.clear(); // на всякий пожарный

const Duck = function (name) {
  this.name = name;
};

Duck.prototype.quack = function () {
  return this.name + ' Duck: Quack-quack!';
};

// / Наследование
const TalkingDuck = function (name) {
  Duck.call(this, name);
};

TalkingDuck.prototype = Object.create(Duck.prototype);
TalkingDuck.prototype.constructor = TalkingDuck;

TalkingDuck.prototype.quack = function () {
  return Duck.prototype.quack.call(this) + ' My name is ' + this.name;
};

// / Инстанцирование

// обычная утка (наследование от Duck)
const regularDuck = new Duck('Just');
console.log(regularDuck.quack());

// утка Donald (наследование от TalkingDuck)
const donald = new TalkingDuck('Donald');
console.log(donald.quack());
