// 6. Write a function that takes in a string and returns the count of each character in the
// string as an object.
// input: "hello how are you"
// output: {
// h:2,
// e:2,
// l:2,
// o:3,
// w:1,
// a:1,
// r:1,
// y:1,
// u:1
// }
// ------------------------------------------------------------
// const a = "hello how are you"
// const b = a.split(" ").join("");
// const c = b.split("");
// const obj = {}
// c.forEach(element => {
//    if(obj[element]){
//     obj[element]= obj[element]+1
//    }
//    else{
//     obj[element] =1;
//    }
// });
// console.log(obj)

// --------------------------------------------------------------
function findCount(a) {
  debugger;
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    
    if (obj.hasOwnProperty(a[i])) {
      obj[a[i]] = obj[a[i]] + 1;
     
    } else {
      obj[a[i]] = 1;
    }
  }
  console.log(obj);
}
findCount("hello how are you");
