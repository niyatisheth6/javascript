// dynamic object value change like 12.js

function changeObject(name, key, value) {
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

  const filterData = objectData.filter(
    (ele) => ele.name.toLowerCase() === name.toLowerCase()
  );

  if (filterData.length == 0) {
    return `Data not found`;
  }
  let result = [];
  filterData.map((ele) => {
    let add = ele.adderess;
    if (ele.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      if (Object.keys(ele).includes(key)) {
        ele[key] = value;
        result.push(ele);
      } else if (Object.keys(add).includes(key)) {
        ele.adderess[key] = value;
        result.push(ele);
      }
    }
  });
  return result;
}

// console.log(changeObject("maya", "city", "dholka"));
console.log(changeObject("Gita", "city", "dholka"));
