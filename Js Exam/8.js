// 8. Write a function that takes in a string and returns the number of vowels in that string.
// function countVowels(str){
//     const b = []
//     for(let i = 0 ; i <str.length;i++ ){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             b.push(str[i])
//         }
//     }
//     console.log(b.length)
// }
// countVowels("hello")

//-------------------------------------------------------------------------------------------------------

function countVowels(str){
    const b = []
    for(let i = 0 ; i <str.length;i++ ){
        if(str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u")){
            b.push(str[i])
        }
    }
    console.log(b.length)
}
countVowels("helloi")
