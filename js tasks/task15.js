// 1.  Write a JavaScript program to list the properties of a JavaScript object.
// Sample Output: name,sclass,rollno

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(Object.keys(student))
// ------------------------------------------
for(let i in student){
    console.log(i)
}

//2.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
console.log(student);
delete student.rollno
console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
let b = Object.entries(student)
console.log(b.length)

// 4. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// [ 'd', 'do', 'dog', 'g', 'go', 'god' ]
// let a = "dog";
// let c = [];
// let b = [];
// let rev = [];

// for (let i = 0; i < a.length; i++) {
//   if (i != a.length) {
//     b= b+a[i]
//     c.push(b)
//   }
// }
// for (let j = a.length-1; j >=0; j--){
//     rev = rev + a[j]
//     c.push(rev)
// }
// console.log(c);

//(1)
// 4. Write a JavaScript program that returns a subset of a string.
let str ="dog"
let result = []
function getstr(inputArr){
    let temp = ""
    inputArr.forEach(function(element,index){
        temp = temp+element
        result.push(temp)
    })
}
str.split("").forEach(function(element,index){
    getstr([...str.slice(index)])
})
console.log(result)

let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
let session = "Am";
if (hh == 0) {
  hh = 12;
}
if (hh > 12) {
  hh = hh - 12;
  session = "Pm";
}
hh = hh < 10 ? "0" + hh : hh;
mm = mm < 10 ? "0" + mm : mm;
ss = ss < 10 ? "0" + ss : ss;
console.log( hh + ":" + mm + ":" + ss + " " + session);
