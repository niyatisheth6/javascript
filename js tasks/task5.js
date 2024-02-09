// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
// The semi-perimeter of triangle ABC = s = (a + b + c)/2
// ABC = √[s × (s – a) × (s – b) × (s – c)].

// function triangle(a,b,c){
//     let s=  (a+b+c)/2;
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     console.log(`The area of a triangle is ${area}`);
// }
// triangle(5,6,7);

// Write a JavaScript program to check whether a string starts with 'RL' and false otherwise.
// function str (checkStr){
//     let result = checkStr.startsWith("RL");
//     console.log(result);
// }
// str("Hello world, welcome to the universe.");

//Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.

// const day = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday", "Saturday"];
// const d = new Date();
// const newDay = day[d.getDay()];
// console.log(`Today is : ${newDay}`);

//second method 

// const d = new Date();
// function currentDate(day){
   
//     const option = { weekday : 'long'};
//     console.log(`today is : ${day.toLocaleDateString('en-us', option)}`) ;
// }
// currentDate(d);

// Current time is : 10 PM : 30 : 38
// const d = new Date();

// function currentTime (time){
//     var hours = time.getHours();
//     var minute = time.getMinutes();
//     var second = time.getSeconds();
//     var ampm = hours >=12 ? 'PM' : 'AM';
//     return `Current time is : ${hours} ${ampm} : ${minute} : ${second}`
// }
// console.log(currentTime(d));

// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// const d = new Date();
// function currentDate (date){
//     var datee = date.getDate();
//     var month = date.getMonth();
//     var year = date.getFullYear();
//     console.log(`${month}-${datee}-${year}`);
//     console.log(`${month}/${datee}/${year}`);
//     console.log(`${datee}-${month}-${year}`);
//     console.log(`${datee}/${month}/${year}`);
// }
// currentDate(d);











// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


// function years(year1, year2){

//     for(let i = year1 ; i<=year2 ; i++){
       
//         const d = new Date(i, 0, 1);
//         if(d.getDay() === 0){
//             console.log(i);
//         }
//     }
// }
// // years(2014,2050);
// w=0
// e=0
// var Today = new Date();
// var Target = new Date("11/21/2025");
//    function num(x, y) {
//     let a = y.getTime() - x.getTime();
//     let b = Math.ceil(a / (1000 * 3600 * 24));
//  for(let i = x ; i<=y ; i++){
//     if(i.getDay() == 0 || i.getDay() == 6)
//     w = w+1;
//  }
//   return e=b-w
// }
// console.log(num(new Date(), Target));

// const currentDate = new Date();

// const currentDayOfMonth = currentDate.getDate();
// const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
// const currentYear = currentDate.getFullYear();

// const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// console.log(dateString);


const myDate = new Date("July 20, 2016 15:00:00");
const nextDayOfMonth = myDate.getDate() + 20;
myDate.setDate(nextDayOfMonth);
const newDate = myDate.toDateString();
console.log(newDate);



