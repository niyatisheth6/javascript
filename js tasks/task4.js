//without using function
// var grid = ["-----", "-p---","-----"];
//   var grid = ["p----","-----", "-----", ];
// var grid = ["-----","----p", "-----"];
// var rowIndex = 0;
// var colIndex = 0;
// var arr = [];
// for (let i = 0; i < grid.length; i++) {
//   if (grid[i].includes("p")) {
//     rowIndex = i;
//     colIndex= grid[i].indexOf("p");
//     arr.push(rowIndex ,colIndex);
//     break;
//   }
// }
// console.log(arr);


//usning function
function newGrid(arr) {
  var rowIndex = 0;
  var colIndex = 0;
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("p")) {
      rowIndex = i;
      colIndex = arr[i].indexOf("p");
      newArr.push(rowIndex, colIndex);
      return newArr;
    }
  }
}
console.log(newGrid(["p----", "-----", "-----"]));
console.log(newGrid(["-----", "-p---", "-----"]));
console.log(newGrid(["-----", "----p", "-----"]));
