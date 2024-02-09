// 16 Write a program to sorting an array with methods.
// let a = [1,4,7,3,2,1]
// console.log(a.sort());

// 16 Write a program to sorting an array without array methods.------------------------------------------------------------------
// let a = [1,4,7,3,2,1]
// let b = []
// let c;
// for(let i = 0 ; i<a.length-1 ; i++){
//     debugger;
//     if(a[i]<a[i+1])
//     {
//         b.push(a[i])
//     }
//     else{
//         b.push(a[i+1])
//     }

// }
// console.log(b)

// 17 Write a program to replace space with comma in the string.
// let a = "Good Morning"
// let b = a.split(" ").join(",")
// console.log(b)

// 17 Write a program to replace space with comma in the string.
// let a = "Good Morning"
// let b =a.replace(" ", ",")
// console.log(b)

// 17 Write a program to replace space with comma in the string.
// let a = "Good Morning"
// for(let i = 0 ; i< a.length ; i++){
//   if(a[i] == " "){
//    a[i] = ","
//   }
// }
// console.log(a)
//----------------------------------------------------------------------------------
// 17 Write a program to replace space with comma in the string.
// function repStr(a) {
//   let b = "";
//   for (let i = 0; i < a.length; i++) {
//     console.log();
//     if (a[i] == " ") {
//       b += ",";
//     } else {
//       b += a[i];
//     }
//   }
//   console.log(b);
// }
// repStr("Good Morning");

// 17 Write a program to replace space with comma in the string.
// function repStr(a) {
//   let c = a.trim();
//   let b = [];
//   for (let i = 0; i < c.length; i++) {
//     if (c[i] == " ") {
//       b += ",";
//     } else {
//       b += c[i];
//     }
//   }
//   console.log(b);
// }
// repStr("  Good Morning  ");

// 18. Write a program to convert string to upper case and upper case to lower case
// Example: input: Abc
// Output: aBC.
// let a ="AbD"
// let b = a.split("")
// for(let i = 0 ; i < b.length ; i++){
//    if(b[i] == b[i].toLowerCase()){
//     console.log(b[i].toUpperCase());
//    }
//    else{
//       console.log(b[i].toLowerCase());
//    }
// }

// 20. Write a program to add 5 in all array elements.
// let a = [2, 3, 4, 5, 6, 7];
// console.log(a.map(sum => sum+5))

// 19 Write a program to find a prime number.
// function prime(n){
//    let flag = false
//    if(n<=1){
//      flag = false
//    }
//    else {
//       for(i=2;i<=n-1;i++){
//          if(n%i == 0){
//             flag= true;
//             break
//          }
//          flag = false
//       }
//    }
//    if(flag == true){
//       return `${n} is not prime`
//    }
//    else{
//       return `${n} is prime`
//    }
// }
// console.log(prime(10))
// console.log(prime(1))
// console.log(prime(3))
// console.log(prime(25))

