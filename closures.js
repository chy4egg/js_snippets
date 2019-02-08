// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

/*
Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.
*/

function makeFunc() {
  const name = 'Mozilla'; // a local variable

  function displayName() {
    // closure
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc(); // "Mozilla"

/*
 Что отличает этот код, и что представляет для нас интерес,
 так это то, что внутренняя функция displayName() была 
 возвращена из внешней до того, как была выполнена.
*/
