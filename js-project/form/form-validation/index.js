//input field name
const firstname = document.querySelector(".firstname");
const username = document.querySelector(".username");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const password = document.querySelector(".pass");
const cpassword = document.querySelector(".cpass");
const gender = document.getElementsByName("gender:checked");
//error message name
const firstnameerror = document.querySelector(".firstnameerror");
const usernameerror = document.querySelector(".usernameerror");
const emailerror = document.querySelector(".emailerror");
const phoneerror = document.querySelector(".phoneerror");
const passworderror = document.querySelector(".passworderror");
const cpassworderror = document.querySelector(".cpassworderror");
const gendererror = document.querySelector(".radioerror");
const btn = document.querySelector(".button");
//pattern validation
const firstnamecheck = /^[a-zA-Z]{3,30}$/;
const usernamecheck = /^[a-z\d]{3,12}$/i;
const emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phonecheck = /^[789][0-9\-\+]{9}$/;
const passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//click event
btn.addEventListener("click", function () {
  validation();
});

const checkvalidation = (regex, ele, error, name) => {
  if (ele.value.length == 0) {
    error.innerHTML = `*Please enter ${name}`;
    ele.classList.add("invalid");
    ele.classList.remove("valid");
    return true;
  } else {
    if (regex.test(ele.value)) {
      error.innerHTML = "";
      ele.classList.add("valid");
      ele.classList.remove("invalid");
      return true;
    } else {
      error.innerHTML = `*Please enter valid ${name}`;
      ele.classList.add("invalid");
      ele.classList.remove("valid");
      return false;
    }
  }
};

const validation = () => {
  //full name validation
  checkvalidation(firstnamecheck, firstname, firstnameerror, "First Name");

  //user name validation
  checkvalidation(usernamecheck, username, usernameerror, "User Name");
  //email check
  checkvalidation(emailcheck, email, emailerror, "Email");
  //phone check
  checkvalidation(phonecheck, phone, phoneerror, "Phone");
  //password check
  checkvalidation(passwordcheck, password, passworderror, "Password");
  //conform password
  if (cpassword.value == 0) {
    cpassworderror.innerHTML = "*Please enter confirm Password";
    cpassword.classList.add("invalid");
    cpassword.classList.remove("valid");
  } else if (password.value != cpassword.value) {
    cpassworderror.innerHTML = "*Password not match";
    cpassword.classList.add("invalid");
    cpassword.classList.remove("valid");
  } else {
    cpassworderror.innerHTML = "";
    cpassword.classList.add("valid");
    cpassword.classList.remove("invalid");
  }
  //gender validation
  const gender = document.getElementsByName("gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      break;
    }
  }
  if (i == gender.length) {
    return (gendererror.innerHTML = "*Please check any radio button");
  }
  return (gendererror.innerHTML = "");
};


//Another way for validation

// const matchRegex = (regex, value) => {
//   return regex.test(value) ? true : false;
// };
// const isEmpty = (ele, error, name, valid) => {
//   if (ele.length == 0) {
//     error.innerHTML = `*Please Enter ${name}`;
//     valid.classList.add("invalid");
//     valid.classList.remove("valid");
//     return true;
//   }
//   return false;
// };

// const validation = () => {
//   //firstname validation
//   if (!isEmpty(firstname.value, firstnameerror, "First Name", firstname)) {
//     if (matchRegex(firstnamecheck, firstname.value)) {
//       firstnameerror.innerHTML = "";
//       firstname.classList.add("valid");
//     } else if (firstname.value.length <= 2) {
//       firstnameerror.innerHTML = "*You need to enter allist 3 character";
//       firstname.classList.add("invalid");
//     } else {
//       firstnameerror.innerHTML = "";
//       firstname.classList.add("valid");
//     }
//   }

//   //username validation
//   if (!isEmpty(username.value, usernameerror, "User Name", username)) {
//     if (matchRegex(usernamecheck, username.value)) {
//       usernameerror.innerHTML = "";
//       username.classList.add("valid");
//     } else {
//       usernameerror.innerHTML = "*Please enter valid user name";
//       username.classList.add("invalid");
//     }
//   }
//   //email validation
//   if (!isEmpty(email.value, emailerror, "Email", email)) {
//     if (matchRegex(emailcheck, email.value)) {
//       emailerror.innerHTML = "";
//       email.classList.add("valid");
//     } else {
//       emailerror.innerHTML = "*Please enter valid email";
//       email.classList.add("invalid");
//     }
//   }
//   //phone validation
//   if (!isEmpty(phone.value, phoneerror, "Phone Number", phone)) {
//     if (matchRegex(phonecheck, phone.value)) {
//       phoneerror.innerHTML = "";
//       phone.classList.add("valid");
//     } else {
//       phoneerror.innerHTML = "*Please enter valid phone number";
//       phone.classList.add("invalid");
//     }
//   }

//   // password validation

//   if (!isEmpty(password.value, passworderror, "Password", password)) {
//     if (matchRegex(passwordcheck, password.value)) {
//       passworderror.innerHTML = "";
//       password.classList.add("valid");
//       password.classList.remove("invalid");

//       //confirm password validation
//     } else {

//       passworderror.innerHTML = "*Please enter valid password";
//       password.classList.add("invalid");
//       password.classList.remove("valid");

//     }
//   }
