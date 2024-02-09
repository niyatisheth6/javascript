// 9. Write a function that takes in an array of numbers and returns the sum of the squares
// of those numbers.
function sumSqr(arr) {
  const b = arr.map((ele) => ele * 2);
  const c = b.reduce((total, current) => {
    return total + current;
  });
  return c;
}
console.log(sumSqr([1, 2, 3, 4, 5]));
