const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

const todos = [];

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = input.value;

  if (inputValue !== "") {
    const newTodo = {
      id: todos[todos.length - 1]?.id + 1 || 0,
      name: inputValue,
      isCompleted: false,
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    };
    todos.push(newTodo);
    input.value = "";
    list.innerHTML = null;
    renderTodos(todos, list);
  }
});
function renderTodos(arr, htmlElement) {
  arr.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const time = document.createElement("p");
    const input = document.createElement("input");
    const userName = document.createElement("p")

    li.textContent = item.name;
    btn.textContent = "delete";
    time.textContent = item.time;

    btn.dataset.deleteTodoBtnDataset = item.id;
    btn.classList.add("todo-btn");

    input.dataset.inputTodoInputDataset = item.id
    input.classList.add("todo-input");

    if(item.isCompleted){
        input.checked = true
        li.style.textDecoration = "line-through"
    }
    input.type = "checkbox";

    li.classList.add("list-item");

    li.appendChild(input);
    li.appendChild(time);
    li.appendChild(btn);
    htmlElement.appendChild(li);
  });
}

list.addEventListener("click", (evt) => {
  if (evt.target.matches(".todo-btn")) {
    const foundedDataset = evt.target.dataset.deleteTodoBtnDataset - 0;
    const foundedTodo = todos.findIndex((item) => item.id === foundedDataset);
    todos.splice(foundedTodo, 1);
    list.innerHTML = null;
    renderTodos(todos, list);
  }else if(evt.target.matches(".todo-input")){
    const foundedDataset = evt.target.dataset.inputTodoInputDataset - 0;
    const foundedTodo = todos.find((item) => item.id === foundedDataset);
   foundedTodo.isCompleted = !foundedTodo.isCompleted
   list.innerHTML = null;
   renderTodos(todos, list);
    console.log(todos);
    
  }
});
