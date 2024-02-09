const item = document.querySelector("#item");
const todoBox = document.querySelector("#to-do-box");
const todo = []
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addItem(item.value);
    // console.log(item.value)
    todo.push(item.value)
    console.log(todo)
    localStorage.setItem('todo',JSON.stringify(todo));
    item.value = "";
  }
});

const addItem = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item}<i class="fas fa-times"></i>`;

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
    
  });

  if (item.length === 0) {
    listItem.remove();
  }
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.addEventListener("focusout", function () {});
  if(item.length > 0){
    todoBox.appendChild(listItem);
  }

};

//get content from local storage  --6--
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("todo"));
  if (lsNotes === null) {
    addItem();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();
