// Inheritance on prototypes in js (learn this exapmle and make comments:)

function Animal(type) {
  const animal = Object.create(Animal.prototype);
  animal.type = type;
  return animal;
}

Animal.isAnimal = function (obj, type) {
  if (!Animal.prototype.isPrototypeOf(obj)) {
    return false;
  }
  return type ? obj.type === type : true;
};

Animal.prototype = {};

function Dog(name, breed) {
  const proto = Object.assign(Animal('dog'), Dog.prototype);
  const dog = Object.create(proto);
  dog.name = name;
  dog.breed = breed;
  return dog;
}

Dog.isDog = function (obj) {
  return Animal.isAnimal(obj, 'dog');
};

Dog.prototype = {
  bark() {
    console.log('ruff, ruff');
  },
  print() {
    console.log('The dog ' + this.name + ' is a ' + this.breed);
  }
};
