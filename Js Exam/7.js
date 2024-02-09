// Write a function that takes in an array of strings and returns a new array with only the
// strings that have a length greater than 5.

function greaterArr(arr) {
  const c = [];
  const b = arr.filter((ele) => {
    if (ele.length > 5) {
      c.push(ele);
    }
  });
  console.log(c);
}
greaterArr(["hello", "surendrea", "hi","mahendra"]);
