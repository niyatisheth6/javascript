function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}
const validation_error = document.getElementById("error");
const regexObj = {
  namecheck: /^[a-zA-Z]{3,30}$/,
  emailcheck: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  dobcheck: /^\d{4}-\d{2}-\d{2}$/,
  phonecheck: /^[789][0-9\-\+]{9}$/,
  citycheck: /^[a-zA-Z\s]{3,30}$/,
};
//form validation
document.getElementById("btn").addEventListener("click", function () {
  validation();
});

//check validation
const checkvalidation = (regex, ele, error) => {
  const errorEle = document.getElementById(error);
  if (ele.value.length === 0) {
    errorEle.innerHTML = `*Please enter ${ele.name}`;
    return false;
  } else if (regexObj[regex].test(ele.value)) {
    errorEle.innerHTML = "";
    return true;
  } else {
    errorEle.innerHTML = `please enter valid ${ele.name}`;
    return false;
  }
};
//validation
const validation = () => {
  const ele = document.getElementsByClassName("required");
  let hasError = false;

  //check data is valid or not
  for (let i = 0; i < ele.length; i++) {
    const e = ele[i];
    const error = checkvalidation(`${e.name}check`, e, `${e.name}_error`);
    if (!error) hasError = true;
  }
  //create unique if all the data are valid
  if (!hasError) {
    const id = { id: new Date().getTime() };
    for (let i = 0; i < ele.length; i++) {
      id[ele[i].name] = ele[i].value;
    }


 
     // //get the value of new data
    function newData() {
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].name === "email") {
          // return ele[i].value;
          console.log(ele[i].value)

        }
      }
    }
newData()

   // get the value of old data
    const oldData = localStorage.getItem("users");
    const parseData = JSON.parse(oldData);
    const old = parseData.map(getEmail)
    function getEmail(useremail){
    //  if((useremail.email).includes(newData()))
    //  {
    //   validation_error.innerHTML = "*Duplicate data";
    //  }
    //  else
    //  {
    //   parseData.push(id);
    //       validation_error.innerHTML = "*Update data";
    //       localStorage.setItem("users", JSON.stringify(parseData));
    //  }
     console.log(useremail.email)
    }

   








  }
};
    // const oldData = localStorage.getItem("users");
  
    // const old = parseData.find(findele);
    // // console.log(old)
    // //get the value of new data
    // function newData() {
    //   for (let i = 0; i < ele.length; i++) {
    //     if (ele[i].name === "email") {
    //       return ele[i].value;
    //     }
    //   }
    // }
    // function findele(e) {
    //   console.log(e.email);
    //   if (e.email === newData()) {
    //     validation_error.innerHTML = "*Duplicate data";
    //   } else {
    //     parseData.push(id);
    //     validation_error.innerHTML = "*Update data";
    //     localStorage.setItem("users", JSON.stringify(parseData));
    //   }
    // }
    
    // //match old and new data
    // if (old.email === newData()) {
    //   validation_error.innerHTML = "*Duplicate data";
    // } else {
    //   parseData.push(id)
    //     validation_error.innerHTML = "*Update data";
    //   localStorage.setItem("users", JSON.stringify(parseData));
    // }