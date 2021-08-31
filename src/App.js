import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const  Data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  state = {
    data:Data,
  }
 

  addItem = (whatWetype) => {
    const newData = {
      task: whatWetype,
      id: new Date().getMilliseconds(),
    completed: false

    };
    this.setState({
      data: [...this.state.data,newData]
    })
  }

toggleCompleted = (id) => {

  this.setState({
    data:this.state.data.map(item => {
      if(item.id === id) {
        return {
              ...item,
              completed: !item.completed
        }
      }
      return item;
    })
  })
}

clearCompleted = (event) => {
  event.preventDefault();
  this.setState({
    data: this.state.data.filter(item => !item.completed )
  
  
  
  });
}

  render () {
    console.log(this.state.data)
    return (
      <div>
          <h1>Welcome to your Todo App!</h1>

     <TodoList data = {this.state.data} toggleCompleted={this.toggleCompleted} />
     <TodoForm addItem={this.addItem}/>
<button onClick={this.clearCompleted}>clearCompleted</button>
      </div>
    )
  }
}

export default App;
