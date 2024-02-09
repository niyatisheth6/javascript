const username = /^[a-z\d]{3,12}$/i;
const inputs = document.querySelectorAll("input");

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.target.name == "username") {
      validate(e.target, username);
    }
  });
});
// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}
