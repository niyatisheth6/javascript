// 10. Write a function to list all the prime number between 0 to 50.
function primeNum() {
  for (let i = 0; i < 50; i++) {
    var flag = 0;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
}
primeNum();
