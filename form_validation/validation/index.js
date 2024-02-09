


const form = document.querySelector('form'),
  nameField = form.querySelector('.name-field'),
  nameInput = nameField.querySelector('.name'),
  emailField = form.querySelector('.email-field'),
  emailInput = emailField.querySelector('.email'),
  phoneField = form.querySelector('.phone-field'),
  phoneInput = phoneField.querySelector('.phone');
  
 // ---- ---- Name Validation ---- ---- //
 function checkName() {
  const username = /^[a-z\d]{5,12}$/i;
  // if (username.length == ""){
  //   return nameField.classList.add('invalid');
  // }
  if (!nameInput.value.match(username)) {
    return nameField.classList.add('invalid');
  }
  nameField.classList.remove('invalid');
}

// ---- ---- Email Validation ---- ---- //
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add('invalid');
  }
  emailField.classList.remove('invalid');
}



// ---- ---- Phone Validation ---- ---- //
function checkPhone() {
  const filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (!phoneInput.value.match(filter)) {
    return phoneField.classList.add('invalid');
  }
  phoneField.classList.remove('invalid');
}



// ---- ---- Calling Function on Form Sumbit ---- ---- //
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmail();
  checkName();
  checkPhone();
 
  emailInput.addEventListener('keyup', checkEmail);
  nameInput.addEventListener('keyup', checkName);
  phoneInput.addEventListener('keyup', checkPhone);
});
