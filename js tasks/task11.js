//JS string practice

// Write a JavaScript function to check whether an `input` is a string or not.
// function checkStr(str){
//     if (typeof(str)  === "string")
//     {
//         console.log("yes");
//     }
//     else{
//         console.log("No");
//     }
// }
// checkStr("Hello");
// checkStr([1,2,3]);
// checkStr(23);

// Write a JavaScript function to check whether a string is blank or not.
// function checkStr(input) {
//   if (input.length == 0) {
//     console.log("yes");
//   } else {
//     console.log("No");
//   }
// }
// checkStr("Hello");
// checkStr("");
// checkStr([1, 2, 3]);

// Write a JavaScript function to split a string and convert it into an array of words.
// function str(input){
//     console.log(input.split(" "));
// }
// str("Hello");
// str("Good Morning");

// Write a JavaScript function to extract a specified number of characters from a string.
// function str(input,index){
//     console.log(input.slice(0,index))
// }
// str("Hello",1);
// str("Good Morning",4);

//Write a JavaScript function to hide email addresses to protect from unauthorized user.
// function protect_email(email) {
//   var splitEmail = email.split("@");
//   var part1 = splitEmail[0];
//   var avg = part1.length / 2;
//   part1 = part1.substring(0,avg);
//   var pEmail = part1 + "...@" + splitEmail[1];
//   return pEmail;
// }
// console.log(protect_email("robin_singh@example.com"));
// console.log(protect_email("roshni_singh@gmail.com"));

// Write a JavaScript function to parameterize a string.
// function string_parameterize(str){
//        var c = str.toLowerCase().replaceAll(" ", "-");
//        return c;
//     }
// console.log(string_parameterize("Robin Singh from USA."));

// Write a JavaScript function to capitalize the first letter of a string.
// function str(input) {
//   var a = input.replace(input[0], input[0].toUpperCase())
//   console.log(a);
// }
// str("js string exercises");

// function str(input) {
//   var a = input.charAt(0).toUpperCase()+input.slice(1);
//   console.log(a);
// }
// str("js string exercises");

// Write a JavaScript function to capitalize the first letter of each word in a string. 
// function str(input) {
//     var b = input.split(" ");
//     for(let i = 0 ; i <b.length;i++){
//         b[i]= b[i].charAt(0).toUpperCase()+b[i].substr(1);
//         console.log(b[i]);
//     }
// }
// str("js string exercises");

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
function str(input) {
    if(input == input.toUppercase()){
        return input.toLowerCase()
    }
    return input.toUppercase()
}
console.log(str("exeRcIses"));