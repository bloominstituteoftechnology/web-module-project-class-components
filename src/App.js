import React from "react";
import Form from "./components/TodoForm";
import List from "./components/TodoList";
import './style.css';

const toDoList = [
  {
    agenda: "Work",
    id: 1,
    completed: false,
  },
  {
    agenda: "Stuff",
    id: 2,
    completed: false,
  },
  {
    agenda: "Do That",
    id: 3,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    };
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(task => {
        return (!task.completed);
      })
    });
  }

  handleAddTask = (task)=> {
    const newTask = {
      agenda: task,
      id: Date.now,
      completed: false
    };


    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  handleToggleTask = (task)=> {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(g => {
        if (g.id === task.id) {
          return {...g, completed: !g.completed}
        } else {
          return g;
        }
      })
    })
  }


  render() {
    return (
      <div className="App">
      <div className="header">
         <h1>ToDo List</h1>
         <Form handleAddTask={this.handleAddTask}/>
       </div>
      <List handleToggleTask={this.handleToggleTask} toDoList={this.state.toDoList} />
      <button onClick={this.handleToggle} className="clear-btn">Clear Purchased</button>
     </div>
    );
  }
}

export default App;
