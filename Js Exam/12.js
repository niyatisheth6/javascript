// WAP to change object value of an array
// array contains object
// like: {
// name:"",
// age:10,
// adderess:{
//            city:"",
//            countryCode:360002,
//            streetNo:1
//          },
// phoneNumber:987654321
// },
// other object like:
// newAddress:{
// countryCode:368215 ,
// streetNo:6
// }
// array has minimum 4 values with different objects and need to change countryCode 360002 to 368215 and 368215  is in other object for user which has name kevin

let objectData = [
  {
    name: "kevin",
    age: 10,
    adderess: {
      city: "rajkot",
      countryCode: 360002,
      streetNo: 1,
    },
    phoneNumber: 987654321,
  },
  {
    name: "raghav",
    age: 12,
    adderess: {
      city: "ahmedabad",
      countryCode: 360003,
      streetNo: 1,
    },
    phoneNumber: 984478666,
  },
  {
    name: "kevin",
    age: 32,
    adderess: {
      city: "diu",
      countryCode: 360004,
      streetNo: 2,
    },
    phoneNumber: 984478666,
  },
  {
    name: "gita",
    age: 23,
    adderess: {
      city: "vadodara",
      countryCode: 360002,
      streetNo: 1,
    },
    phoneNumber: 978478666,
  },
];

newAddress = {
  countryCode: 368215,
  streetNo: 6,
};

objectData.map((ele) => {
  if (ele.name == "kevin") {
    ele.adderess.countryCode = newAddress.countryCode;
  }
  console.log(ele);
});
