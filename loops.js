// Взято из книги "Шаблоны проектирования на JavaScript"

/* FOR */
// 1. Определяем переменные заранее, используя всего одно ключевое слово let
// 2. Счет итераций ведется в обратном порядке (выигрыш в производительности - сравнение с 0 эффективнее)
let i;


const myArray = [1, 2, 3];
for (i = myArray.length; i--;) { /* doSomething */ }


// если итерация идет по HTMLCollection - мы выиграем в
// производительности, если заранее определим длину массива,
// иначе на каждой итерации длина будет вычисляться
// заново через обращение к DOM, что довольно затратно
// выход - определить длину заранее:
for (let j = 0, max = myArray.length; j < max; j++) { /* doSomething */ }

/* WHILE */
const anotherArray = [1, 2, 3];

let j = anotherArray.length;
while (j--) { /* doSomething */ }

/* FOR IN */
// for in обходим объекты (к массивам не применять)
// обязательно надо проверять на hasOwnProperty(),
// чтобы отфильтровать свойства, которые были унаследованы от прототипа
// можно отказаться от проверки, если точно уверен в содержании объекта (немного ускорит цикл)

/* SWITCH */
// ничего примечательного. Используется строгое сравнение.
const switchTest = false;
switch (switchTest) {
  case 0:
    console.log(0);
    break;
  case true:
    console.log(true);
    break;
  case false:
    console.log(false); // выполнится этот кейс
    break;
  default:
    console.log('default');
}
