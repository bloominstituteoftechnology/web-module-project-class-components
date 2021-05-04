import React from 'react';
// import ReactDom from 'react-dom';
import TaskForm from './components/TaskForm';
import Todo from './components/TodoList';


const list = [{
  task: "Rake lawn",
  id: 0,
  completed: false,
},
{
  task: "Buy groceries",
  id: 1,
  completed: true,
},
{
  task: "Get gas",
  id: 2,
  completed: false,
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  clearCompleted = () => {
    const newList = this.state.list.filter(item => {
      return(item.completed === false);
    });
    this.setState({
      list: newList,
    })
  }

  toggleItem = (id) => {
    const newItems = this.state.list.map(item => {
      if (item.id === id) {
        console.log("about to toggle", item);
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return (item);
      }
    });
    console.log("newItems: ", newItems);
    this.setState({
      list: newItems
    });
  }

  addItem = (task) => {
    const newItem = {
      name:task,
      id:this.state.list.length,
      completed: false
    };
    // list.push(newItem);
    this.setState({
      list: [...this.state.list, newItem]
    })
    
    console.log("List: ", list)
    console.log("this.state.list: ", this.state.list)
    console.log("newItem: ", newItem )
  }

    render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your To-Do App!</h2>
          <TaskForm addTask={this.addItem} />
        </div>
        <Todo clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} list={this.state.list} />  
      </div>   
    );
  }
}

export default App;
