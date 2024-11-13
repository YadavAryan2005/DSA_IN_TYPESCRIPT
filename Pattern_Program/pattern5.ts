//number changin pyramid
/*
1
2 3
4 5 6
7 8 9 10
*/
let limit = 4;
let count = 1;
for (let i = 1; i <= limit; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += count + " ";
    count++;
  }
  console.log(str);
}
