//blank square pattern
/*
 * * * * * *
 *         *
 *         *
 *         *
 *         *
 * * * * * *
 */
let n = 5;
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
      star += "* ";
    } else {
      star += "  ";
    }
  }
  console.log(star);
}
