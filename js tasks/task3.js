// convert string to an array.
// check the given value is array or not (12, [123,456])
// My New Task reverse the string using array methods
// reverse array without using an array methods ([1,2,3,5,6,8,9])
// find the missing value from array and limit is smallest array value to largest value ([5,9,0,6,11,7,2])

//1. convert string to an array.
let a = "Hello world";
let d = ["Hello","world"];
// let e = d.join(" ")
let f = d.toString();
console.log(f)
// let b = Array.from(a);
// let c = b.join("")
// const b =a.split("");
// console.log(typeof([...a]));

//anothre way to convert srting to array
//   let a = "Hello world";
//   let arr = [];
//   for (let i = 0 ; i<a.length ; i++){
//     arr.push(a[i]);
//   }
//   console.log(arr);

//2. check the given value is array or not (12, [123,456])
//   let number = 12;
//   let num1 =  [123,456]
//   console.log(Array.isArray(number));
//   console.log(Array.isArray(num1));

//3.reverse the string using array methods
//     let task = "My New Task";
//     function revString(){
//       let newstr = Array.from(task);
//       newstr.reverse();
//       return newstr.toString();

//     }
//    console.log(revString());

//4.reverse array without using an array methods
// let arr = [1, 2, 3, 5, 6, 8, 9];
// function revArray() {
//   let reverseArray = [];
//   for (let i = arr.length-1 ; i >=0; i--) {
//     reverseArray.push(arr[i]);
//   }
//   return reverseArray;
// }
// console.log(revArray());

//5.find the missing value from array and limit is smallest array value to largest value
  // var a = [5, 9, 0, 6, 11, 7, 2];
  // var count = 11;
  // var missing = new Array();

  // for(let i = 0 ; i<= count ; i++){
  //   if(a.indexOf(i) == -1){
  //       missing.push(i);
  //   }
  // }
  // console.log(missing);


//another way find the missing value from array and limit is smallest array value to largest value
  // var a = [5, 9, 0, 6, 11, 7, 2];
  // count = Math.max(...a);
  // // console.log(count);
  // var missing = [];
  //   for(let i = 0 ; i<= count ; i++){
  //     if(a.indexOf(i) == -1){
  //         missing.push(i);
  //     }
  //   }
  //   console.log(missing);

  // function missingNum(arr){
  //   // var a = [5, 9, 0, 6, 11, 7, 2];
  //   count = Math.max(...arr);
  // var missing = [];
  //   for(let i = 0 ; i<= count ; i++){
  //     if(arr.indexOf(i) == -1){
  //         missing.push(i);
  //     }
  //   }
  //   console.log(missing);
  // }
  // missingNum([5, 9, 0, 6, 11, 7, 2]);
  // missingNum([5, 9,12,15]);
  
  // console.log(typeof(b));
  // let c = parseInt(b);
  // console.log(c);
  // var b = a.sort();

//   var b = a.sort();
// console.log(b);
//   var count = 3;
//   var missing =[];

//   for(let i = 0 ; i<= count ; i++){
//     if(a.indexOf(i) == -1){
//         missing.push(i);
//     }
//   }
//   // console.log(missing);


//6. reverse string My New Task  to Task New My
// let arr = "My New Task";
// let newArr = arr.split(" ");
// let c = newArr.reverse();
// let d =c.join(" ");
// console.log(d);

// reverse string My New Task  to Task New My without array methods
// let arr = "My New Task";
// let newArr = arr.split(" ");
// let reverseArr = [];
// for (i = newArr.length - 1; i >= 0; i--) {
//   reverseArr.push(newArr[i]);
// }
// console.log(reverseArr);


//reverse string
// let arr = "My New Task";
// let tempArr = [];
// let tempStr = "";
// let newStr = "";
// let reverseArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != " ") {
//     tempStr = tempStr + arr[i];
//     if (arr.length - 1 === i) {
//       tempArr.push(tempStr);
//     }
//   } else {
//     tempArr.push(tempStr);
//     tempStr = "";
//   }
// }
// for (let j =tempArr.length - 1; j >= 0; j--) {
//   reverseArr.push(tempArr[j]);
// }
// for (let k = 0; k < reverseArr.length; k++) {
//   reverseArr[k];
//   newStr = newStr + reverseArr[k] + " ";
// }
// console.log(newStr);


//dymamic reverse string
// function reverseStr(arr) {
//   let resultArr = [];
//   let resultStr = "";
//   let result = "";
//   let reverseRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     debugger;
//     if (arr[i] != " ") {
//       resultStr = resultStr + arr[i];
//       if (arr.length - 1 === i) {
//         resultArr.push(resultStr);
//         resultStr = "";
//       }
//     } else {
//       resultArr.push(resultStr);
//       resultStr = "";
//     }
//   }
//   for (let j = resultArr.length - 1; j >= 0; j--) {
//     reverseRes.push(resultArr[j]);
//   }
//   for (let k = 0; k < reverseRes.length; k++) {
//     reverseRes[k];
//     result = result + reverseRes[k] + " ";
//   }
//   console.log(result);
// }
// reverseStr("My New Task");
// reverseStr("Hello World  !!");
// reverseStr("pppp qqq eeee tttt");
