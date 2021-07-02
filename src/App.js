import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const toDoList =
      [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Amlak Cookies',
        id: 1528817084358,
        completed: false
      },
      {
        task: 'Barkon Garage',
        id: 152817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 152817084358,
        completed: false
      }
        
      ];
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
       toDoList
    }
  }
   toggleItem = (id) =>{
   
   this.setState({
     toDoList: this.state.toDoList.map(item =>{
       if(item.id === id){
        return {
          ...item, completed: !item.completed

        }
       }else {
         return item
       }
     })
    })
  }
  addItem = (itemName) =>{
    const newItem= {
      task: itemName,
      id: new Date(),
      completed: false
      
    }
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
  }
  render() {
   
    
    return (
      
      <div className="welcome">
        <h2>Welcome to your Todo App!</h2>
       <TodoList  list={this.state.toDoList} toggleItem={this.toggleItem}/>
       <TodoForm  addItem={this.addItem}/>
      </div>
    );
    
}
}
export default App;
