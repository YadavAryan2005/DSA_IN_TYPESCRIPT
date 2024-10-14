//this is a linear search logic in javascript/typescript

let arr:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let searchElement:number = 11;
function linearSearch(
  data: number[],
  searchElement: number
): number | undefined {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === searchElement) {
      return i;
    }
  }
}
const result = linearSearch(arr, searchElement);
if (!result) console.log("Element not found");
else console.log("Element found at index result" + result);

//another way
//build in function for linear search
const result1 = arr.indexOf(searchElement);
if (result1 === -1) 
    console.log("Element not found");
else 
    console.log("Element found at index result" + result1);
