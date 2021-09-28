import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.clearDoneItems = this.clearDoneItems.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.state = {todos: []};
  }

  addItem(string){
    this.setState({todos: [...this.state.todos, {text:string, done:false}]});
  }

  clearDoneItems(){
    this.setState({todos: this.state.todos.filter((item)=>!item.done)});
  }

  completeItem(index){
    
    return () => this.setState({todos: this.state.todos.map((item, idx) => {if(idx===index) return {...item, done:!item.done}; return item})});
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeItem={this.completeItem}/>
        <TodoForm addItem={this.addItem} clearDoneItems={this.clearDoneItems}/>
      </div>
    );
  }
}

export default App;