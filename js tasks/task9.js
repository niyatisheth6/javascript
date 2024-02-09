// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// console.log(arr1.concat(arr2));

// const ages = [32, 33, 16, 40,44];
// const a = ages.filter(agess)
// function agess (age){
//     return age>18
// }
// console.log(a);

// const ages = [32, 33, 16, 40,44];
// const a = ages.filter((age) => {
//     return age>14;
// })
// console.log(a);

// const ages = [32, 33, 16, 40,44];
// const a = ages.every(age => {
//     return age >18
// })
// console.log(a)

// const ages = [32, 33, 16, 40,44];
// const a = ages.some(age => {
//     return age >18
// })
// console.log(a)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("kiwi",2))


///class object =======================================================================================

// class car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     date(){
//         const d = new Date();
//         return d.getFullYear() + this.name;
//     }
// }
// const arr = new car('ford', 2019)
// console.log(arr.date())

class a {
    constructor(name){
        this.name=name
    }
   parent(){
        return `i am ${this.name}`
    }
}
class b extends a{
    constructor(name,age)
    {
        super(name)
        this.age = age
    }
    child(){
        return `i am ${this.name}'s child  and my age is ${this.age}`
    }
}
const arr1 = new a('rekha');
const arr2 = new b('rekha',15)
console.log(arr1.parent())
console.log(arr2.child())
