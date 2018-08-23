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

politeGreeter.greet(); //=> Hello.
friendlyGreeter.greet(); //=> Hey!
boredGreeter.greet(); //=> sup.


/*
Стратегия как класс:
Стратегиями так же могут быть и классы, особенно в случаях, когда алгоритмы сложнее, чем выдуманный в приведенном выше примере. Использование классов позволяет определить интерфейс для каждой стратегии.

Рассмотрим это на примере.
*/

var Greeter = function(strategy) {
  this.strategy = strategy;
};

// Мы можем использовать силу Прототипов в Javascript
// для создания классов, которые ведут себя как стратегии

// Здесь мы создаём абстрактный класс,
// который будет служить в качестве интерфейса для всех наших стратегий.
// Впринципе он не необходим, но полезен в целях документирования
var Strategy = function() {};
 
Strategy.prototype.execute = function() {
    throw new Error('Strategy#execute needs to be overridden.')
};

// Как и в примере выше мы хотим создать стратегии приветствия
// Давайте создадим для них подкласс из класса `Strategy`.
// Обратите внимание, что родительский класс требует,
// что бы дочерние переопределяли метод `execute`
var GreetingStrategy = function() {};
GreetingStrategy.prototype = Object.create(Strategy.prototype);

// Определим метод `execute`, который входит в состав публичного интерфейса
// для объектов класса `Strategy` и дочерних ему.
// Обратите внимание, что он определён через два других метода.
// Этот паттерн называется Шаблонный метод (Template Method).
// Вы увидете его преимущества немного позже.
GreetingStrategy.prototype.execute = function() {
    return this.sayHi() + this.sayBye();
};
 
GreetingStrategy.prototype.sayHi = function() {
    return "Hello, ";
};
 
GreetingStrategy.prototype.sayBye = function() {
    return "Goodbye.";
};

// Теперь мы можем попробовать нашу стратегию.
// Только сперва потребуется чуть-чуть модернизировать класс `Greeter`.
Greeter.prototype.greet = function() {
    return this.strategy.execute();
};
 
var greeter = new Greeter(new GreetingStrategy());
greeter.greet() //=> 'Hello, Goodbye.'

// Мы определили Strategy как объект (или класс) с методом execute. Клиент может использовать любую стратегию, которая соответствует этому классу.

// Обратите внимание на GreetingStrategy. Самое интересное находится в переопределении метода execute. Он зависит от других методов этого класса. Теперь объекты, унаследовавшие этот класс, могут изменять отдельные методы, такие как sayHi или sayBye, без изменения основного алгоритма. Этот паттерн называется Шаблонный метод и он прекрасно сочетается со СТРАТЕГИЕЙ.

// Давайте посмотрим, как.

// Так как GreetingStrategy#execute определён через другие методы.
// Мы можем создать подклассы, в которых они будут переопределены,
// при этом не затрагивая основной алгоритм (метод `execute`)

var PoliteGreetingStrategy = function() {};
PoliteGreetingStrategy.prototype = Object.create(GreetingStrategy.prototype);
PoliteGreetingStrategy.prototype.sayHi = function() {
    return "Welcome sir, ";
};
 
var FriendlyGreetingStrategy = function() {};
FriendlyGreetingStrategy.prototype = Object.create(GreetingStrategy.prototype);
FriendlyGreetingStrategy.prototype.sayHi = function() {
    return "Hey, ";
};
 
var BoredGreetingStrategy = function() {};
BoredGreetingStrategy.prototype = Object.create(GreetingStrategy.prototype);
BoredGreetingStrategy.prototype.sayHi = function() {
    return "sup, ";
};
 
var politeGreeter = new Greeter(new PoliteGreetingStrategy());
var friendlyGreeter = new Greeter(new FriendlyGreetingStrategy());
var boredGreeter = new Greeter(new BoredGreetingStrategy());
 
politeGreeter.greet(); //=> 'Welcome sir, Goodbye.'
friendlyGreeter.greet(); //=> 'Hey, Goodbye.'
boredGreeter.greet(); //=> 'sup, Goodbye.'

// Определив метод execute, GreetingStrategy создаёт семейство алгоритмов. В приведенном выше фрагменте, мы воспользовались этим, создав несколько их разновидностей.

// Даже без использования подклассов, Greeter все еще обладает полиморфизмом. Нету необходимости переключаться на Greeter другого типа, чтобы вызывать нужный нам алгоритм. Теперь все они есть в каждом новом объекте Greeter.

var greeters = [
  new Greeter(new BoredGreetingStrategy()),
  new Greeter(new PoliteGreetingStrategy()),
  new Greeter(new FriendlyGreetingStrategy()),
];

greeters.forEach(function(greeter) {
  // Так как каждый `greeter` может использовать свою стратегию
  // нету никакой необходимости проверять его тип.
  // Мы просто запускаем его метод `greet`,
  // а он уже сам разберётся как его обработать.
  greeter.greet();
});

// СТРАТЕГИЯ в реальном коде
// Один из моих любимых примеров использования СТРАТЕГИИ — библиотека Passport.js.

// Passport.js предоставляет простой способ управления аутентификацией в node.js. Она поддерживает большое число провайдеров (Facebook, Twitter, Google и др.), каждый из которых представлен в виде отдельной стратегии.

// Библиотека доступна в виде npm-пакета, так же как и все её стратегии. Программист волен решать, какой npm-пакет устанавливать в данном конкретном случае. Вот фрагмент кода, который наглядно показывает, как это работает:

// взято от сюда http://passportjs.org

var passport = require('passport')
    // Каждый метод аутентификации представлен отдельным npm-пакетом.
    // Они дополняют Контекст новыми стратегиями.
  , LocalStrategy = require('passport-local').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy;

// Passport может быть объявлен через любую стратегию.
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// Здесь, мы используем стратегию Facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

/*
Библиотека Passport.js сама по себе содержит только пару простых механизмов аутентификации. В ней нет ничего, кроме них и Контекста. Эта архитектура позволяет сторонним программистам легко реализовывать свои собственные механизмы аутентификации, не загромождая проект.

Мораль
Паттерн Стратегия предоставляет способ увеличить модульность и проверяемость вашего кода. Но это не значит, что его нужно использовать повсеместно по поводу и без. Так же полезно использовать примеси для добавления функционала в объекты во время выполнения. А иногда достаточно простого полиморфизма в стиле старой доброй утиной типизации.

Так или иначе, использование СТРАТЕГИИ, в первую очередь, позволяет масштабировать код, избегая больших накладных расходов на архитектуру. Это видно на примере Passport.js, в котором, использование этого паттерна, способствуют безболезненному добавлению новых стратегий от других программистов.
*/