import React from 'react';
import { ReactDOM } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  handleClear = ()=> {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(task=> !task.completed)
    });
  }


  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    });
  }
  
  handleToggleTodo = (task) => {
    //3. Toggle Item
    // - setState and retain old state
    // - find the item that matches our clicked item id
    // - replace that item with same but purchased flipped
    // - leave all other items alone

    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(tasks => {
        if (tasks.id === task.id) {
          return {
            ...tasks,
            completed: !task.completed
          }
        }
        return tasks;
      })
    });
  }
  

render() {
  return (
    <div>
      <div>
         <h1>Shopping List</h1>
         <TodoForm handleAddTodo={this.handleAddTodo}/>
       </div>
      <TodoList handleToggleTodo={this.handleToggleTodo} todoList={this.state.task} />
      <button onClick={this.handleClear} >Clear Purchased</button>
     </div>
  );
}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


export default App