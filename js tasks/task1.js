  // Add 10  starting of the array
      // Remove 40 from array
      // how many ways to clear all element from the array and give example.
      // Remove first element from the array
      // numbers = [20,30,40,50,60]; 

      //using array methods
      // var numbers = [20,30,40,50,60];

      // Add 10  starting of the array
      // function num(){
      //    numbers.unshift(10);
      //    return numbers;
      // }
      // console.log(num());

      // Remove 40 from array
      // function num(){
      //     numbers.splice(2,1)
      //     return numbers;
      // }
      // console.log(num());

      // Remove first element from the array
      //  function num(){
      //     numbers.shift();
      //     return numbers;
      // }
      // console.log(num());

      // 3 ways to clear all element from the array and give example.
      // 1. with the use of splice()
      //  function num(){
      //     numbers.splice(0,numbers.length)
      //     return numbers;
      // }
      // console.log(num());

      //2. set the number array to a new empty array
      // function num(){
      //     numbers = [];
      //     return numbers;
      // }
      // console.log(num());

      //3. set the number array to a new empty array
      // function num(){
      //     numbers.length = 0;
      //     return numbers;
      // }
      // console.log(num());

      //without using array methods
      // Add 10  starting of the array

      // using spread operator
      // function num(){
      //   let num2 = [10,...numbers];
      //   return num2;
      // }
      // console.log(num());

      //using concate
      // function num(){
      //   let num1 = [10];
      //   let addNum = num1.concat(numbers);
      //   return addNum;
      // }
      // console.log(num());

      // Remove 40 from array
      // function num(arr, value){
      //     return arr.filter(function(ele){
      //         return ele != value;
      //     })
      // }
      // console.log(num(numbers, 40));

      // Remove first element from the array
      // function num(arr, i){
      //     return arr.filter(function(ele){
      //         return ele != numbers[i];
      //     })
      // }
      // console.log(num(numbers, 0));
