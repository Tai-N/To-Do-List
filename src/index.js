import { createTodo } from "./createTodo.js";
import { display } from "./display";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";

const eventsHandler = (() => {
  const mainInput = document.querySelector(".input-main");
  const listOfCreatedTodos = document.querySelector(".list");

  // create/add todo when user press enters on main input field
  mainInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      createTodo.add();
      display.render();
    }
  });

  // listen for events on the created todos
  listOfCreatedTodos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      let deleteBtnIdNum = parseInt(e.target.id.substr(-1));
      deleteTodo.todosToDelete.unshift(deleteBtnIdNum);
      deleteTodo.deleteIt();
    }

    if (e.target.classList.contains("checkbox")) {
      let checkBoxIdNum = parseInt(e.target.id.substr(-1));
      editTodo.todosToEdit.unshift(checkBoxIdNum);
      editTodo.markCompleted();
    }
  });
})();
