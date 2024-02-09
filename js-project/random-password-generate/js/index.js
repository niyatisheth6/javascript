//selectors
const btn = document.querySelector("#btn");
const totolChar = document.querySelector("#total-char");
const upperCase = document.querySelector("#upper-case");
const lowerCase = document.querySelector("#lower-case");
const numbers = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");
const passbox = document.querySelector("#pass-box");
// Dataset
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

//get random num
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

//generate password
const generatePassword = (password = "") => {
  if (upperCase.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowerSet);
  }
  if (numbers.checked) {
    password += getRandomData(numberSet);
  }
  if (symbol.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length <= totolChar.value) {
    return generatePassword(password);
  }
  passbox.innerHTML = trucate(password, totolChar.value);
};
btn.addEventListener("click", function () {
  generatePassword();
});

//truncate password
function trucate(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return subStr;
  }
}

