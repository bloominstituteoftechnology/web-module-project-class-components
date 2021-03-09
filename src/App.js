import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [], 
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.strikeThrough = this.strikeThrough.bind(this);
    this.clear = this.clear.bind(this);
  }
  formSubmit = (item) => {
    const newItem = {
      text: item,
      id: Date.now(),
      complete: false
    };
    this.setState(items => ({
      items: [...this.state.items.concat(newItem)]
    }))
  }

  strikeThrough = (evt) => {
    evt.target.classList.toggle('strike');
  }
  

  clear = (evt) => {
    this.setState(state => ({
      items: this.state.items.filter(item => !item.complete)
    }))
  };

  render() {
    return (
      <div className='todo'>
      <h1>Todo List: MVP</h1>
      <div>
          <TodoList items = {this.state.items} strikeThrough={this.strikeThrough} toggle={this.toggleItem} />
          <TodoForm addText={this.formSubmit} clear={this.clear}/>
        </div>
      </div>
    );
  }
}

export default App;
