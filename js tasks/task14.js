//-------------------------------------------------------------------------
//=============================   object   ================================
//-------------------------------------------------------------------------

// let a = {
//     fname : "niyati",
//     lname: "sheth",
//     age : 25,
//     subject : ["maths","science","physics"],
//     name : function(){
//         return this.fname + " " + this.lname
//     }
// }
// console.log(a)
// console.log(a.fname)
// console.log(a.name())
// console.log(a.subject[2])
// console.log(a.subject)

//convert in object to array
// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(Object.entries(a))

//change properties in object
// a.fname = "jainam"
// console.log(a);

//add new properties in object
// a.group = "A"
// console.log(a);

//delete object properties
// delete a.age
// console.log(a)

//-------------------------------------------------------------------------
//========================= object literas ================================
//-------------------------------------------------------------------------
// let fname = "niyati";
// let lname = "sheth";
// let obj = {
//   fname,
//   lname,
// };
// console.log(obj)
// console.log(obj.fname)

//add element as key
// let n = "age";
// let obj = {
//     [n]:23
// };
// console.log(obj)

//add element as value
// let n = 23
// let obj = {
//     age: n
// };
// console.log(obj)

//concate propertie key element
// let n = "surname";
// let obj = {
//   ["niyu " + n]: "sheth",
// };
// console.log(obj);

//create function in object
// let a = {
//     'sum ele'(a,b){
//         let c = a+b
//         return c
//     }
// }
// console.log(a["sum ele"](2,4))

//create function and return object
// let fname = "niyati";
// let lname = "sheth";
// let course = "BE";
// function obj(fname, lname, course) {
//   let fullname = fname + " " + lname;
//   return { fullname, course };
// }
// let s = obj(fname, lname, course);
// console.log(s.fullname);
// console.log(s.course);
