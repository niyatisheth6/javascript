var jsonData = [
  {
    Mainland: ["Asia"],
    Country: ["Japan"],
    City: ["Tokyo"],
  },

  {
    Mainland: ["Asia"],
    Country: ["India"],
    City: ["Ahmedabad"],
  },
  {
    Mainland: ["Asia"],
    Country: ["India"],
    City: ["Surat"],
  },

  {
    Mainland: ["North America"],
    Country: ["Mexico"],
    City: ["Mexico City"],
  },
  {
    Mainland: ["Asia"],
    Country: ["Japan"],
    City: ["Kyoto"],
  },
];

// var result = {};
// jsonData.map((ele) => {
//   debugger;
//   var mainland = ele.Mainland[0];
//   var country = ele.Country[0];
//   var city = ele.City[0];

//   if (!result[mainland]) {
//     result[mainland] = {};
//   }

//   if (!result[mainland][country]) {
//     result[mainland][country] = [];
//   }
//   result[mainland][country].push(city);
//   result[mainland].total = 23
// });
// console.log(result);

var result = {};
const table = jsonData.map((ele) => {
  var mainland = ele.Mainland[0];
  var country = ele.Country[0];
  var city = ele.City[0];

  if (!result[mainland]) {
    result[mainland] = {};
    result[mainland].total = 0;
  }

  if (!result[mainland][country]) {
    result[mainland][country] = [];
  }

  if (result[mainland][country].push(city)) {
    result[mainland].total++;
  }
});

for(let mainland of Object.keys(result)){
  for(let country of Object.keys(result[mainland])){
 
   for(let i = 0 ; i < result[mainland][country].length ; i++){
    console.log(result[mainland][country][i])
   }
  }
  
}