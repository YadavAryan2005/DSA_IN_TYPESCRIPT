let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let searchElement = 12;
function binarySearch(
  data: number[],
  searchElement: number
): number | undefined {
  let start = 0;
  let end = data.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === searchElement) {
      return mid;
    } else if (data[mid] < searchElement) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
const result = binarySearch(arr, searchElement );
if (!result) console.log("Element not found");
else console.log("Element found at index result" + result);
