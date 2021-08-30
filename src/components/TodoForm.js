import React from 'react'

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        input:""
      }
    }
  
    handleChanges = e => {
      this.setState({
        input: e.target.value
      })
    };

    handleClick = e => {
      e.preventDefault();
      this.props.handleAdd(this.state.input);
      this.setState({
        input: ''
      })
    }
  
    render() {
      return (
        <form>
          <input type="text" name="todo" placeholder='type a todo...' onChange={this.handleChanges} value={this.state.input}/>
          <button onClick={this.handleClick}>Add</button>
        </form>
      );
    }
  }
  
  export default TodoForm;