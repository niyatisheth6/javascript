const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}
//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "*Please enter your email");
  }
}

//check number is valid
function checkPhone(input,min,max) {
   var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
   if(input.value.length == ""){
    showError(input, "*Please enter your mobile number");
  } 
  else if ((input.value.length > max) || (input.value.length < min)) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${max} digits`
    );
  }
  else if (input.value.match(filter)){
    showSuccess(input);
  }
  else {
    showError(input, "*Please enter valid number");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
if(input.value.length == ""){
    showError(input, "*Please enter your name");
  }
else if ((input.value.length > max) || (input.value.length < min)) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} to ${max} characters`
    );
  } 
 
  else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, phone]);
  checkLength(username, 3, 15);
  checkPhone(phone ,10, 10);
  checkEmail(email);
});
