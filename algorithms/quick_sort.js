
/*
* Быстрая сортировка (Quick Sort)
*/

const arr = [1,3,9,10,22,13,65]

//функция-разделитель
const swap = (items, firstIndex, secondIndex) => {
    [items[firstIndex], items[secondIndex] ] = [items[secondIndex], items[firstIndex] ]
}

console.log( swap(arr, arr[0], arr.length) )

//TODO: доделать, задокументировать
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call
var result = quickSort(items);