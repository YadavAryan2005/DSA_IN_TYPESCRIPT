//number increasing reverse pyramid
/*
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
*/
let val = 5;
for (let i = val; i >= 1; i--) {
  let str = "";
  for (let j = i; j >= 1; j--) {
    str += j + " ";
  }
  console.log(str);
}
