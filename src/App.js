import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const tasks = [
  {
    name:'Do MVP',
    id: 123,
    taskDone: false

  },
  {
    name:'bake',
    id: 1234,
    taskDone: true

  },
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleClear = ()=>{
    // first step - loop through state
    // second step - if in the state the taskDone is true filter it out
    this.setState({
      ...this.setState,
      tasks: this.state.tasks.filter(item => !item.taskDone)
    })
  }


  handleAddItem = (name) =>{
    const newItem ={
      name:name,
      id: Date.now(),
      taskDone: false
    };
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newItem]
    });
  }
  
  handleToggleItem = (task)=> {
   console.log(task.id)
   const newTasks = this.state.tasks.map(item =>{
     if(task.id === item.id){
       return{
         ...item,
         taskDone: !item.taskDone
       }
      } else {return item}
   })
   this.setState({
     ...this.state,
     tasks: newTasks
   })
  }

  


  render() {
    return (
      <div>
        <h1>Todo List for the day</h1>
        <TodoForm handleAddItem ={this.handleAddItem}/>
        <TodoList handleToggleItem={this.handleToggleItem} tasks={this.state.tasks}/>
        <button onClick={this.handleClear} className="clear-btn">Clear Task</button>
      </div>
    );
  }
}

export default App;
