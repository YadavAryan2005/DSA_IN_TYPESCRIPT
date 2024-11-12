//Number trangular patern
/*
     1
    2 2
   3 3 3
  4 4 4 4
*/
let num = 4;
for (let i = 1; i <= num; i++) {
  let space = "";
  let star = "";
  for (let j = 1; j <= num - i; j++) {
    space += " ";
  }
  for (let k = 1; k <= i; k++) {
    star += i + " ";
  }
  console.log(space + star);
}

//shorter way to solve this problem
// let num: number = 4;
// for (let i = 1; i <= num; i++) {
//   console.log(" ".repeat(num - i) + (i + " ").repeat(i));
// }
