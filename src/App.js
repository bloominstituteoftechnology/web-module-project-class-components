import React from 'react';
import ReactDOM from 'react-dom';


import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    name: 'Wash the car!',
    id: 123,
    done: false
  },
  {
    name: 'Bathe the dog!',
    id: 124,
    done: false
  },
  {
    name: 'Fix the TV!',
    id: 1235,
    done: false
  },
  {
    name: 'Finish your school project!',
    id: 1246,
    done: false
  },
  {
    name: 'Put gas in the car!',
    id: 1237,
    done: false
  },
  {
    name: 'Buy Hot Wheels cars!',
    id: 1248,
    done: false
  }
];
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos:todos
    }
  }
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item=> {
        if (item.id === id) {
          return ({
            ...item,
            done: !item.done
          });
        } else {
          return item;
        }
      })
    });
  }
  handleAddItem = (name)=> {
    const newItem = {
      name: name,
      id: Date.now(),
      done: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  }
  handleClear = () => {
    this.setState({
      ...this.state,
      todos:this.state.todos.filter(item => {
        return(!item.done);
      })
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Todo List</h1>
           <TodoForm handleAddItem={this.handleAddItem}/>
         </div>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todos={this.state.todos} />
       </div>
    );
  }
}

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, rootElement);
