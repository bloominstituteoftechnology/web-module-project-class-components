import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='todo'/>
                <button>Add ToDo</button>
            </form>
           
        );
    }
}

export default TodoForm;