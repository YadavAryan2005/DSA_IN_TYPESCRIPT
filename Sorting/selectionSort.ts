let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    if (index === -1) continue;
    arr[index] = arr[i];
    arr[i] = min;
  }
  return arr;
}
console.log(selectionSort(arr));
