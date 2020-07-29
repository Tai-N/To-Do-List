// import { Display } from "./display";
import { indexOf } from "lodash";

const TodoFactory = (text, completed, id) => {
  return { text: text, completed: false, id: Date.now() };
};

const TodoManager = (() => {
  const todos = [];

  const add = (todoText) => {
    const todo = TodoFactory(todoText);
    todos.push(todo);

    // Display.render();
  };

  const edit = (newText, idNum) => {
    todos.forEach((todo) => {
      if (todo.id === idNum) {
        todo.text = newText;
      }
    });

    // Display.render();
  };

  const deleteTodo = (idNum) => {
    todos.forEach((todo) => {
      if (todo.id === idNum) {
        todos.splice(todos.indexOf(todo), 1);
      }
    });

    // Display.render();
  };

  const markCompleted = (idNum) => {
    todos.forEach((todo) => {
      if (todo.id === idNum) {
        todo.completed = !todo.completed;
      }
    });

    // Display.render();
  };

  return { todos, add, edit, deleteTodo, markCompleted };
})();

// ? export default didn't work
export { TodoManager };
