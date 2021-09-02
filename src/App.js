import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ]
    }
  }


  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }



  completed = (id) => {
    this.setState({
     tasks: this.state.tasks.map( task => {
       if (task.id === task.id){
         return {
           ...task,
           completed: !task.completed
         }
       }else{
         return task;
       }
      
     }) 
    })
  }




  completeClear = (event) => {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter( task => !task.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
 
      

   
    return (
      <>
    <h1>Todo List:MVP</h1>
      <TodoList tasks={this.state.tasks} completed={this.completed} />
      <TodoForm addTask={this.addTask}/>
      <button onClick={this.completeClear}>Clear Completed</button>
      </>
    );
  }
}

export default App;
