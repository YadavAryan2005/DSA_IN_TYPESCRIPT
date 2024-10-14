let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let searchElement = 9;
function recursiveBinarySearch(
  arr: number[],
  start: number,
  end: number,
  searchElement: number
): number {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == searchElement) return mid;
    else if (arr[mid] < searchElement)
      return recursiveBinarySearch(arr, (start = mid + 1), end, searchElement);
    else
      return recursiveBinarySearch(arr, start, (end = mid - 1), searchElement);
  }
  return -1;
}
const result: number | undefined = recursiveBinarySearch(
  arr,
  0,
  arr.length - 1,
  searchElement
);
if (result === -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index result " + result);
}
