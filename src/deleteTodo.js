import { todosList } from "./createTodo";

const deleteTodo = (() => {
  const todosToDelete = [];
  const deleteIt = () => {
    let idNum = todosToDelete[0];
    todosList.todos.splice(idNum, 1);
    document.getElementById(`todo-${idNum}`).remove();
  };

  return { deleteIt, todosToDelete };
})();

export { deleteTodo };
