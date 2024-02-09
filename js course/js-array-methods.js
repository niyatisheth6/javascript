//Array methods

// 1.foreach 
const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      salary: 1000,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      salary: 2000,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      salary: 3000,
    },
  ];
// 1-for each function 
// users.forEach(e =>{
//     console.log(e.name);
// })

// 2 . includes -- that return only true or false 
// var a = [2,3,4,5,6,4]
// var b =a.includes(8);
// console.log(b);

// 3.filter --> check data is pass then return new array this is only return particular element
// var a = [2,3,4,5,6,4];
// var b = a.filter(e =>{
//     return e> 4;
// })
// console.log(b);

// 4. map ---> this is use to check all elements
// var a = [2,3,4,5,6,4];
// var b = a.map(e =>{
//     return e*e;
// })
// console.log(b);

//5.sort ---> sort the value
// var a = [2,8,4,3,3,4,5,6,4];
// var b = a.sort((a,b) =>{
//     return a-b;
// })
// console.log(b);

//sort
// var a = [2,8,4,3,3,4,5,6,4];
// var b = a.sort((a,b) => a>b ? 1 : -1)
// console.log(b);

//6. find ==> this is to find value in the array but do not get same element repeted at that time we can use filter
// var a = [2,3,4,5,6,4];
// var b = a.find(e =>{
//     return e> 4;
// })
// console.log(b);


//7.Reduce ==> return single value we can use reduce instade of foreach loop
// var a = [2,3,4,5,6,4,4];
// var b = a.reduce((total , value) =>{
//     return total+value;
// })
// console.log(b);

// 8.some => check condition and only return true or false check particular element
// var a = [2,3,4,5,6,4,4];
// var b = a.some(num => num>5);
// console.log (b);

// 9.every => check each element and only return true or false 
// var a = [2,3,4,5,6,4,4];
// var b = a.every(num => num>0);
// console.log (b);

// 10.array.from() ==> convert srting to array of single value 
// var name = "niyati";
// var b = Array.from(name);
// console.log(b);

//11. Array.of() ==> convert in array
// var a = Array.of(2,3,4,5,6,4,4);
// console.log(a);

// 12 entries() ==> array iterator with key value pair
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let f = fruits.entries();
// for (let x of f){
//   // let f = x.entries();
//   console.log(f);
// }
// console.log(fruits.entries);
