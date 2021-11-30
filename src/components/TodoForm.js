import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render(){
        return(
        <form>
          <input
            placeholder= "Add a todo!"
            onChange= {this.handleChange}
          />
          <button onClick= {this.handleSubmit}>Submit</button>
        </form>
        )
    }
}

export default TodoForm;