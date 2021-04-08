import React from 'react';

const tasks = [
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

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      todo: tasks
    }


  }

  toggleCompleted = (todoId) =>{
    const newTask = this.state.todo.map(task=>{
      if (todoId ===task.id){
        return {
          ...task,
          completed: !task.completed 
          
        }
      }
      else {return task}
    })

      this.setState({
        ...this.state,
        tasks: newTask
      })
  }

  addItem = (taskName, e) =>{
    e.preventDefault();
    const newTodo ={
      id: Date.now(),
      name: taskName,
      completed: false
    }
    this.setState({
      ...this.state,
      task:[...this.state.task, newTodo]
    })
  }

  clearCompleted =()=>{
      this.setState({
        ...this.state,
        tasks: this.state.tasks.filter(task=> !task.completed)

      })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className= 'App'>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
