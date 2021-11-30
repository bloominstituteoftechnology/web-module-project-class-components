import React from "react";


class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        input: ""
      }
    }

    handleChanges = e => {
      this.setState({
        ...this.state,
        input: e.target.value
      });
    };

    handleClick = (e)=> {
      e.preventDefault();

      this.props.handleAddTask(this.state.input);
    }

    render() {

      return (
        <form>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input onChange={this.handleChanges} type="text" name="item" />
          <button onClick={this.handleClick}>Add</button>
        </form>
      );
    }
  }

  export default TodoForm; 