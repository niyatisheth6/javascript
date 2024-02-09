// 5. Write a function that takes in a string and returns the string reversed.
//     input:"Hello How are you"
// output: "you are How Hello"

// function revStr(str){
//     const b = str.split(" ").reverse().join(" ");
//     console.log(b)
// }
// revStr("Hello How are you");
//-------------------------------

// ---------------------------------------------------------------------------------------
function revStr(str) {
  if (str[0] == " " && str[str.length - 1] == " ") {
    return rev(str);
  } else {
    str = " " + str + " ";
    return rev(str);
  }
}
function rev(newStr) {
  let tempArray = [];
  let revArrray = [];
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] != " ") {
        tempArray.push(newStr[i]);
    } else {
      for (let j = tempArray.length - 1; j >= 0; j--) {
        revArrray.push(tempArray[j]);
      }
      tempArray = [];
      tempArray.push(" ");
    }
  }
  let revStr = "";
  revArrray.forEach((item) => {
    revStr += item;
  });
  return revStr;
}
console.log(revStr(" hello how are you "));
console.log(revStr("good morning"));
