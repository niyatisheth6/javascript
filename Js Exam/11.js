// Write a function that takes in a sentence and returns an object with the count of each word in the sentence.
// 	input:"abc abc def def abd deff"
// 	output: {abc: 2, def: 2, abd: 1, deff: 1}

function findCount(str) {
  let obj = {};
  let b = str.split(" ");

  for (let i = 0; i < b.length; i++) {
    if (obj.hasOwnProperty(b[i])) {
      obj[b[i]] = obj[b[i]] + 1;
    } else {
      obj[b[i]] = 1;
    }
  }
  console.log(obj);
}
findCount("abc abc def def abd deff");
