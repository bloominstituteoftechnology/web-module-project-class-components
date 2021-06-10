import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './components/Todo.css'

 const todoList = [
  {   task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {   task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: todoList
    }
  }



toggleItem = (id)=>{
    const newList = this.state.tasks.map(item =>{
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      }else{
        return(item);
      }
    });
    this.setState({
      tasks: newList
    })
  }
addItem =(title) => {
    const newItem ={
      task:title,
      id:this.state.tasks.length,
      completed:false

    };
    console.log(newItem)
    this.setState({
      tasks:[...this.state.tasks, newItem]
    })
  }
clearCompleted = (e)=>{
    e.preventDefault();
    const newList  = this.state.tasks.filter(item =>{
      return(item.completed === false);
    });
    
this.setState({
      tasks:newList
    })
  }

render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>

</div>
);
}
}

export default App;
