import React from 'react';
import TodoList from './components/TodoList'

//styles
import './components/Todo.css'

const todoItems= [
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
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems: todoItems,
    }
  }

  toggleComplete = (clickedItemId) =>{
    this.setState({
      todoItems: this.state.todoItems.map((item)=>{
        if (item.id === clickedItemId){
          return {
            ...item, completed: !item.completed,
          }
        }
        else {
          return item;
        }
      })
    })
  }

  deleteCompleted = () => {
    //filter for items that are not completed and keep them in the array, remove items if an item has a class of completed,
    this.setState({
      todoItems: this.state.todoItems.filter((item)=>{
        return item.completed === false;
      })
    })
    
  }
    
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItems={this.state.todoItems} toggleComplete={this.toggleComplete} deleteCompleted={this.deleteCompleted}/>
      </div>
    );
  }
}

export default App;
