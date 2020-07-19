// returns a todo obj w/ text, completed, prop
const TodoFactory = (text, completed) => {
  return { text, completed };
};

const todosList = (() => {
  // stores all our todo objects
  const todos = [];

  return { todos };
})();

const createTodo = (() => {
  const add = () => {
    const mainInput = document.querySelector(".input-main");
    let textEntered = mainInput.value;
    // every new todo has a completed prop as initially F
    let newTodo = TodoFactory(textEntered, false);
    todosList.todos.push(newTodo);
  };

  return { add };
})();

export { TodoFactory, todosList, createTodo };
