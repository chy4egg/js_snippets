/*
* Сортировка пузырьком
* Единственным плюсом данного алгоритма является, пожалуй, его простота
* Сложность: O(N2)
* Чтобы отсортировать таким образом весь массив длиной N, придется пройтись по нему N-1 раз
* (последний элемент уже будет отсортирован на предыдущей итерации, поэтому для него проход не требуется)
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // if (1 > 3) -> swap 1 and 3
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([1, 3, 9, 10, 22, 13, 65]);

/*
* Но в таком виде никак не учитывается какой массив поступил на вход и даже для уже отсортированного массива
* программа должна будет выполнить все итерации циклов.
* Ее можно оптимизировать добавив флаг, отслеживающий перестановку элементов — если за очередной проход по массиву
* не произошло ни одной, значит массив уже отсортирован. Оптимизируем его и перепишем на ES6:
*/

const superBubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const wasSorted = false;
    for (let j = 0; j < arr.length - 1; j++) {
      // if (1 > 3) -> swap 1 and 3
      if (arr[j] > arr[j + 1]) {
        // ES6 swapping
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (wasSorted) {
      break
    }
  }
  console.log(arr);
  return arr;
};

superBubbleSort([1, 3, 9, 10, 22, 13, 65]);
