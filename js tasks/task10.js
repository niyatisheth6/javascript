// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student.name +" "+ student.sclass +" "+ student.rollno)


// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student);
// delete(student.name);
// console.log(student);


// Write a JavaScript program to get the length of a JavaScript object.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(Object.key(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))
// var a = Object.entries(student)
// console.log(a.flat())

// console.log(Object.keys(student).length)


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for(i=0 ; i<library.length; i++){
//     // console.log(i)
//     console.log(library[i].author);
//     console.log(library[i].title);
//     console.log(library[i].readingStatus);
// }

// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder. 

// function vol (r,h){
//     var c = Math.PI * Math.pow(r) * h;
//     return c
// }
// console.log(vol(2,4))

//factory function

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// function result(name , sclass, rollno){
//     return {
//         name :name ,
//         sclass : sclass,
//         rollno : rollno
//      }
// }
// console.log(result("David Rayy","VI",12))

// function Result(name , sclass, rollno){
//     this.name=name;
//     this.sclass=sclass;
//     this.rollno = rollno
// }
// const a = new Result("Daviddd Rayy","VI",12)

// a.addition = function(){
//     console.log('hello')
// }
// console.log(a)