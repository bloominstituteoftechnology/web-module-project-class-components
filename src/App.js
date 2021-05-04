import React, { Component } from 'react';

import './App.css';

import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

const Data = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];

const Default = {
  task: '',
  search: ''
};

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list: Data,
      values: Default
    };
    // this.update.bind(this);
    // this.submit.bind(this);
  }

  update = (name, value) => {
    const Temp = Object.assign({}, this.state.values);
    Temp[name] = value;
    this.setState({ values: Temp });
  };

  submit = () => {
    if (this.state.values.task.trim().length === 0) return this.setState({ values: Default });
    const Task = {
      task: this.state.values.task,
      id: Date.now(),
      completed: false
    };
    const List = this.state.list;
    List.push(Task);
    this.setState({ list: List });
    this.setState({ values: Default });
    localStorage.setItem('Data', JSON.stringify(List));
  };

  clear = () => {
    const List = this.state.list;
    const Temp = List.filter((item) => !item.completed);
    this.setState({ list: Temp });
    this.setState({ values: Default });
    localStorage.setItem('Data', JSON.stringify(Temp));
  };

  toggle = (id, completed) => {
    const List = this.state.list;
    const Index = List.findIndex((item) => item.id === id);
    if (List[Index]) {
      List[Index].completed = !completed;
      this.setState({ list: List });
      // this.setState({ values: Default });
      localStorage.setItem('Data', JSON.stringify(List));
    }
  };

  render() {
    return (
      <div>
        <div className='center'>
          <h1>Todo List</h1>
          <TodoSearch
            values={this.state.values}
            update={this.update}
          />
          <Todo
            values={this.state.values}
            update={this.update}
            submit={this.submit}
            clear={this.clear}
          />
          <TodoList
            values={this.state.values}
            list={this.state.list}
            toggle={this.toggle}
          />
        </div>
      </div>
    );
  }

}

export default App;
