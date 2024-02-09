// 4. Write a JavaScript function to reverse a string.(input: hello output: olleh).

// function revStr(str){
//     const b= []
//     for(let i =str.length-1 ; i >=0 ; i--){
//        b.push(str[i])
//     }
//    const c = b.join("")
//    console.log(c)
// }
// revStr("hello")

//-------------------------------------------------------------------------------
// function revStr(str){
//     const b= []
//     for(let i =str.length-1 ; i >=0 ; i--){
//       console.log(str[i])
//     }
// }
// revStr("hello")

//-------------------------------------------------------------------------------
function revStr(str) {
  const b = [];
  for (let i = 0; i < str.length; i++) {
    b.push(str[i]);
  }
  b.reverse();
  console.log(b);
}
revStr("hello");
