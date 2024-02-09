const btn = document.querySelector(".button");
const regexObj = {
  firstnamecheck: /^[a-zA-Z]{3,30}$/,
  usernamecheck: /^[a-z\d]{3,12}$/i,
  emailcheck: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phonecheck: /^[789][0-9\-\+]{9}$/,
  passwordcheck: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  cpasswordcheck: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  gendercheck: /^male$|^female$/,
};

btn.addEventListener("click", () => {
  validation();
});
const checkvalidation = (regex, ele, error) => {
  const errorElement = document.getElementById(error);

  if (ele.value.length == 0) {
    errorElement.innerHTML = `*Please enter ${ele.name}`;
    ele.classList.add("invalid");
    ele.classList.remove("valid");
    return true;
  } else {
    if (regexObj[regex].test(ele.value)) {
      errorElement.innerHTML = "";
      ele.classList.add("valid");
      ele.classList.remove("invalid");
    } else if (ele.name === "cpassword") {
      const pwd = document.getElementById("password");
      if (pwd.value === ele.value) {
        errorElement.innerHTML = "";
        ele.classList.add("valid");
        ele.classList.remove("invalid");
        return false;
      } else {
        errorElement.innerHTML = `*Not match`;
        ele.classList.add("invalid");
        ele.classList.remove("valid");
        return true;
      }
    } else if (ele.name === "gender") {
      const radio = document.getElementsByClassName("gender_selection");
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked == false) {
          errorElement.innerHTML = "*Please check any radio button";
        } else {
          errorElement.innerHTML = "";
          return true;
        }
      }
    } else {
      errorElement.innerHTML = `*Please enter valid ${ele.name}`;
      ele.classList.add("invalid");
      ele.classList.remove("valid");
      return false;
    }
  }
};

const validation = () => {
  const elements = document.getElementsByClassName("required");
  for (let i = 0; i < elements.length; i++) {
    const e = elements[i];
    checkvalidation(`${e?.name}check`, e, `${e?.name}_error`);
  }
};
