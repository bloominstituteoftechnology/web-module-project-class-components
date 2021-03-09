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
      text: ''
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.strikeThrough = this.strikeThrough.bind(this);
    this.clear = this.clear.bind(this);
  }
  formSubmit = () => {
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  onSubmit = (evt) =>{
    evt.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
    this.setState({text: ''})
  }
  
  onChange = (evt) => {
    this.setState({text: evt.target.value});
  }
 
  strikeThrough = (evt) => {
    evt.target.classList.toggle('strike');
  }
  clear = (evt) => {
    this.setState(state => ({
      text: this.state.items.filter(item => !item.complete)
    }))
  };
  render() {
    return (
      <div className='todo'>
      <h1>Todo List: MVP</h1>
      <div>
          <TodoList items = {this.state.items}  strikeThrough={this.strikeThrough} />
          <TodoForm submit={this.onSubmit} change={this.onChange} value={this.state.text} clear={this.clear}/>
        </div>
      </div>
    );
  }
}

export default App;
