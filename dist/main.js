/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/*! exports provided: TodoFactory, todosList, createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFactory", function() { return TodoFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosList", function() { return todosList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
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




/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/*! exports provided: deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");


const deleteTodo = (() => {
  const todosToDelete = [];
  const deleteIt = () => {
    let idNum = todosToDelete[0];
    _createTodo__WEBPACK_IMPORTED_MODULE_0__["todosList"].todos.splice(idNum, 1);
    document.getElementById(`todo-${idNum}`).remove();
  };

  return { deleteIt, todosToDelete };
})();




/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");


const display = (() => {
  const render = () => {
    const listOfCreatedTodos = document.querySelector(".list");
    listOfCreatedTodos.innerHTML = "";

    _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["todosList"].todos.forEach((todoObj, i) => {
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




/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/*! exports provided: editTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodo", function() { return editTodo; });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");


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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTodo */ "./src/deleteTodo.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo */ "./src/editTodo.js");





const eventsHandler = (() => {
  const mainInput = document.querySelector(".input-main");
  const listOfCreatedTodos = document.querySelector(".list");

  // create/add todo when user press enters on main input field
  mainInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["createTodo"].add();
      _display__WEBPACK_IMPORTED_MODULE_1__["display"].render();
    }
  });

  // listen for events on the created todos
  listOfCreatedTodos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      let deleteBtnIdNum = parseInt(e.target.id.substr(-1));
      _deleteTodo__WEBPACK_IMPORTED_MODULE_2__["deleteTodo"].todosToDelete.unshift(deleteBtnIdNum);
      _deleteTodo__WEBPACK_IMPORTED_MODULE_2__["deleteTodo"].deleteIt();
    }

    if (e.target.classList.contains("checkbox")) {
      let checkBoxIdNum = parseInt(e.target.id.substr(-1));
      _editTodo__WEBPACK_IMPORTED_MODULE_3__["editTodo"].todosToEdit.unshift(checkBoxIdNum);
      _editTodo__WEBPACK_IMPORTED_MODULE_3__["editTodo"].markCompleted();
    }
  });
})();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map