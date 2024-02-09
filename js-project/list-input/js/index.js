const list = document.querySelector(".list");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  addlist();
  item.value = "";
});

const addlist = () => {
  let item = document.querySelector("#item").value;
  let inputItem = document.createElement("div");
  inputItem.classList.add("inputItem");
  inputItem.innerHTML = `<input type="text" value="${item}" id="addItem">
       <i class="delete fas fa-times"></i>`;

  if (item.length > 0) {
    list.appendChild(inputItem);
  }

  inputItem.querySelector(".delete").addEventListener("click", function () {
    inputItem.remove();
  });
};

