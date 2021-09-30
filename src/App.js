import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

//TODO List Array
const todolist = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },

  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Adding constructor with state
  constructor() {
    super();

    //initialize state object
    this.state = {
      todolist,
      todoInput: "",
    };
  }

  //Update to state
  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //New todao added

  addTodoTask = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      complete: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  };

  //Todo submit
  submitTodo = (e) => {
    e.preventDefault();
    this.addTodoTask(this.state.todoInput);
    this.setState({
      todoInput: "",
    });
  };

  //Toggle item
  toggleItem = (id) => {
    console.log(id);
    this.setSate({
      todoList: this.state.todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm
          submitTodo={this.submitTodo}
          addTodoTask={this.addTodoTask}
          todoInput={this.state.todoInput}
          handleChanges={this.handleChanges}
        />

        <div>
          <TodoList
            todoList={this.state.todoList}
            toogleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
