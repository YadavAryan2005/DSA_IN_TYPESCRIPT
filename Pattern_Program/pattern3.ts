//Number increasing pyramid
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/
let value = 6;
for (let i = 1; i <= value; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j + " ";
  }
  console.log(str);
}
