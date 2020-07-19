import { todosList } from "./createTodo.js";

const editTodo = (() => {
  const todosToEdit = [];

  //remember that each todo added to DOM, we can obtain an ID# from it, that # correlates with the position of a certain todo obj in the todos array
  const markCompleted = () => {
    let checkBoxIdNum = todosToEdit[0];
    let checkBoxClicked = document.querySelector(`#checkbox-${checkBoxIdNum}`);
    const todoText = document.getElementById(`todo-text-${checkBoxIdNum}`);

    if (checkBoxClicked.checked) {
      todoText.style.textDecoration = "line-through";
    } else if (checkBoxClicked.checked === false) {
      todoText.style.textDecoration = "none";
    }
  };

  return { markCompleted, todosToEdit };
})();

export { editTodo };
