import { TodoManager } from "./todoManager";
import { Display } from "./display";

const EventHandler = (() => {
  const todoMainInput = document.querySelector(".todo-input-main");
  const list = document.querySelector(".list");

  todoMainInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      TodoManager.add(todoMainInput.value);
    }
  });

  //listen for a keypress on each created todo input
  list.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.classList.contains("todo-input")) {
      const todoInputText = e.target.value;
      const todoInputIdNum = parseInt(e.target.id.match(/[0-9]+/g).join(""));
      TodoManager.edit(todoInputText, todoInputIdNum);
    }
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const todoDelBtnIdNum = parseInt(e.target.id.match(/[0-9]+/g).join(""));
      TodoManager.deleteTodo(todoDelBtnIdNum);
    }

    if (e.target.classList.contains("checkbox")) {
      const todocheckBoxIdNum = parseInt(e.target.id.match(/[0-9]+/g).join(""));
      TodoManager.markCompleted(todocheckBoxIdNum);
    }
  });
})();

export { EventHandler };
