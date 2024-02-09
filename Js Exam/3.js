// 3. Write a JavaScript function to remove duplicates from an array.
function removeDuplicate(arr){
   let b =[];
 for(let i = 0 ; i<arr.length;i++){
   if(b.includes(arr[i]) == false){
    b.push(arr[i])
   }
  
 }
 return b
}
console.log(removeDuplicate([1,2,3,3,5,1,2,3]))