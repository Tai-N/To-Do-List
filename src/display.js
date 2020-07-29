import { TodoManager } from "./todoManager";

const Display = (() => {
  const list = document.querySelector(".list");

  const render = () => {
    list.innerHTML = "";

    TodoManager.todos.forEach((todo) => {
      // show if todo has been completed in DOM
      const textStyle = todo.completed
        ? "text-decoration: line-through;"
        : "text-decoration: none;";

      // for each todo obj, create a template string to display in DOM
      let todoToDisplay = ` 
    <div id="todo-item-${todo.id}">

      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" onclick="return false;" class="checkbox" id="todo-checkbox-${todo.id}"/>
          </div>
        </div>

        <input type="text" style="${textStyle}" id="todo-input-${todo.id}" class="todo-input form-control form-control-lg" value="${todo.text}"/>

        <div class="input-group-append">
          <button class="btn btn-outline-secondary btn-delete" type="button" id="todo-btn-delete-${todo.id}">X</button>
        </div>
      </div>

    </div>`;

      // add each todo to the list div before the end of each created one
      list.insertAdjacentHTML("beforeend", todoToDisplay);
    });
  };

  return { render };
})();

export { Display };
