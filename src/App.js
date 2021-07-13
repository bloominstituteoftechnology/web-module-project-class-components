import React , {Component} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoList =[
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

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todoList:todoList
  }
}

handleItemToggle = (itemId) => {
  this.setState({
    todoList: this.state.todoList.map(item => {
      if(item.id===itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return(item);
    })
  })
}

handleItemAdd=(itemTask) => {
  const item ={
    task: itemTask,
    id: this.state.todoList.length,
    completed: false
  }

  const newTask=[...this.state.todoList, item]

  this.setState({
    todoList: newTask
  })
}

handleItemCompleted =()=> {
  const newTodo = this.state.todoList.filter(item => {
    return(!item.completed)
  })

  this.setState({
    todoList:newTodo
  })
}
  render() {
    return (
      <div className="App">
        <h2>Todo list: MVP</h2>
        <TodoForm handleItemAdd ={this.handleItemAdd}/>
        <TodoList todoList={this.state.todoList} handleItemCompleted ={this.handleItemCompleted} handleItemToggle={this.handleItemToggle}/>
      </div>
    );
  }
}

export default App;
