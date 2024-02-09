// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
// function sum(a, b) {
//   if (a == b) {
//     return a*3;
//   } else {
//     return a + b;
//   }
// }
// console.log(sum(2, 3));
// console.log(sum(2, 2));

// 2. Write a program to find 'sh' is in string or not.
// function checkStr(str) {
//   return str.includes("sh");
// }
// console.log(checkStr("hello shahil"));
// console.log(checkStr("Good Morning"));

// 3. Write a program to find the length of string and add the letter 'a' at the end of the string.
// function checkLenth(str) {
//   console.log(`Length of the string is ${str.length}`);
//   console.log(str.concat("a"));
// }
// checkLenth("hello shahil");
// checkLenth("Good Morning");

// 4. Write a program to calculate the sum of all elements of the array.
// function sum(arr) {
//   let getSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//      getSum += arr[i];
//   }
//     return getSum;
// }
// console.log(sum([1, 2, 3, 4, 5]));

//sum of all elements of the array using Reduce method
// function sum(arr) {
//   const a = arr.reduce(function (total, element) {
//     return total + element;
//   });
//   return a;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// // 5. Write a program to find 10 is in the array or not.
// function findElement(arr) {
//   return arr.includes(10);
// }
// console.log(findElement([1, 2, 3, 4, 50]));
// console.log(findElement([1, 10, 3, 4, 50]));

// 6. Write a program to set a new element in the position of 3 in the array.
// function addElement(arr){
//      arr.splice(3,0,4);
//      return arr
// }
// console.log(addElement([1, 2, 3, 5]));

// 7. Write a program to reverse the array with array methods and without array methods.
// function reverseArr(arr){
//      return arr.reverse()
// }
// console.log(reverseArr([1, 2, 3, 4]));

//reverse without array methods
// let a = [1, 2, 3, 5];
// for (let i = a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }

// 8. Write a program to remove all the elements to the array.
// let a = [1,2,3,4,5,6];
// a.splice(0,a.length)
// console.log(a)

// 8. Write a program to remove all the elements to the array.
// let a = [1, 2, 4, 4, 5, 6];
// for (let i = a.length - 1; i >= 0; i--) {
//   if (a.length != 0) {
//     a.pop();
//   }
// }
// console.log(a);

// 8. Write a program to remove all the elements to the array.
// let a = [1, 2, 4, 4, 5, 6];
// a = []
// console.log(a)

// 8. Write a program to remove all the elements to the array.
// let a = [1, 2, 4, 4, 5, 6];
// a.length = 0
// console.log(a)

// 8. Write a program to remove all the elements to the array.
// let a = [1, 2, 4, 4, 5, 6];
// for (let i = a.length - 1; i >= 0; i--) {
//   if (a.length != 0) {
//     a.shift();
//   }
// }
// console.log(a);

// 9. Write a program to concat 2 strings
// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a.concat(b));

// 10. Write a program to get 5th elements of an array.
// let a = [1,2,3,4,5,6,7]
// console.log(a[4])

//concat  2 strings without method
// let a = "Good";
// let b = "morning";
// console.log(a+" "+b);

// 10. Write a program to get 5th elements of an array.
// function getEle(arr,index){
//     if(arr.length-1 == -1){
//         return `Array is blank`
//     }
//     if(index<0){
//         return `index number is not valid`
//     }
//     if(index>5){
//         return `Please enter valid index`
//     }
//     if(typeof(arr[index]) == "string"){
//         return `only enter number`
//     }
//     return `5th element is ${arr[index]}`

// }
// console.log(getEle([1,2,3,4,5,6,7],4));
// console.log(getEle([1,2,3,4,"hello",6,7],4));
// console.log(getEle([],4));
// console.log(getEle([],-4));
// console.log(getEle([1,2],-4));

// 11. Write a program to find a number which is greater than 20 from an array.

// function greaterNum(arr){
//   return arr.find(num =>{
//     return num > 20
//   })
// }
// console.log(greaterNum([1, 2, 4, 4, 24, 25, 35, 6]))

// 11. Write a program to find a number which is greater than 20 from an array.

// function greaterNum(arr){
//     return arr.filter(num =>{
//       return num > 20
//     })
//   }
//   console.log(greaterNum([1, 2, 4, 4, 24, 25, 35, 6]))

// 11. Write a program to find a number which is greater than 20 from an array.
// function greaterNum(arr){
//     return arr.reduce((a,num) =>{
//     //    num > 20 && a.push(num)
//        return a
//     },[])
//   }
//   console.log(greaterNum([1, 2, 4, 4, 24, 25, 35, 6]))

// 11. Write a program to find a number which is greater than 20 from an array.

// function greaterNum(arr) {
//   let findEle = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 20) {
//      findEle.push(arr[i])
//     }
//   }
//   return findEle
// }
// console.log(greaterNum([1, 2, 4, 4, 24, 25, 35, 6]));

// 12. Write a program to find pelindrome number. Eg. 121, 1221, 1567651, etc...
//pelindrome using methods
// function pelindrome(ele) {
//   let reverEle;
//   if (typeof ele === "number") {
//     let b = ele.toString();
//     reverEle = b.split("").reverse().join("");
//     if (b == reverEle) {
//       return `Number is pelindrome`;
//     } else {
//       return `Number is not a pelindrome`;
//     }
//   } else {
//     reverEle = ele.split("").reverse().join("");
//     if (ele == reverEle) {
//       return `String is pelindrome`;
//     } else {
//       return `String is not a pelindrome`;
//     }
//   }
// }
// console.log(pelindrome(123));
// console.log(pelindrome("hello"));
// console.log(pelindrome(121));
// console.log(pelindrome("aa"));

//pelindrome without using method
// function pelindrome(ele) {
//     let revStr = "";
//   if (typeof(ele) === "number") {
//     let b = ele.toString();

//       for (let i = b.length - 1; i >= 0; i--) {
//         if (i != -1) {
//           revStr = revStr + b[i];
//         }
//       }
//       if(b == revStr){
//         return  `Number is pelindrome`
//       }
//       else{
//         return `Number is not a pelindrome`
//       }

//   }
//   else{
//     for (let i = ele.length - 1; i >= 0; i--) {
//             if (i != -1) {
//               revStr = revStr + ele[i];
//             }
//           }
//           if(ele == revStr){
//             return  `String is pelindrome`
//           }
//           else{
//             return `String is not a pelindrome`
//           }
//   }
// }
// console.log(pelindrome(123));
// console.log(pelindrome("hello"));
// console.log(pelindrome(121));
// console.log(pelindrome("aa"));

// //13 Write a program to reverse the string without function.
// function strReverse(str) {
//   let a = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     a = a + str[i];
//   }
//   return a;
// }
// console.log(strReverse("good morning"));

// //13 Write a program to reverse the string  with function.
// let a ="good morning";
// let b = a.split("").reverse().join("")
// console.log(b)

// 14. Write a program to add elements to the first index and add elements to the end of the array.
// let a = [2,3,4,5,6]
// a.push(7)+a.unshift(1)
// console.log(a)

//15. Write a program to calculate the count of  'a' in the string.
// function countEle(str, ele) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == ele) {
//       count = count + 1;
//     }
//   }
//   return count
// }
// console.log(countEle("radicalloop", "a"));



//refactor palimdron code
// function isPelindrome (str,type){
//     let revStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       if (i != -1) {
//         revStr = revStr + str[i];
//       }
//     }
//     if(str == revStr){
//       return  `${type} is pelindrome`
//     }
//     else{
//       return `${type} is not a pelindrome`
//     }
//   }
//   function pelindrome(ele) {
//     if (typeof(ele) === "number") {
//       let b = ele.toString();
//       return isPelindrome(b,"Number")
//   }
//     else{
//         return isPelindrome(ele,"String")
//     }
//   }
//   console.log(pelindrome(123));
//   console.log(pelindrome("hello"));
//   console.log(pelindrome(121));
//   console.log(pelindrome("aa"));


































