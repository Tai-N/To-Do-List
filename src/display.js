import { todosList } from "./createTodo.js";

const display = (() => {
  const render = () => {
    const listOfCreatedTodos = document.querySelector(".list");
    listOfCreatedTodos.innerHTML = "";

    todosList.todos.forEach((todoObj, i) => {
      // for each todo Obj, create a template string to display in DOM
      let todoToDisplay = ` <div id="todo-${i}">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" class="checkbox" id="checkbox-${i}"/>
          </div>
        </div>
        <input type="text" id="todo-text-${i}" class="form-control form-control-lg" value="${todoObj.text}" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary btn-delete" type="button" id="btn-delete-${i}">
            X
          </button>
        </div>
      </div>
    </div>`;

      // add each todo before the end of each one
      listOfCreatedTodos.insertAdjacentHTML("beforeend", todoToDisplay);
    });
  };

  return { render };
})();

export { display };
