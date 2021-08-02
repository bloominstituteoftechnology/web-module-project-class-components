import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskValue: '',
        }
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            taskValue: event.target.value,
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.handleAddTodo(this.state.taskValue);
    }

    render() {
        return (
            <form>
                <input
                    onChange = {this.handleChanges}
                    type = "text"
                    name = "task"
                />
                <button onClick = {this.handleClick}>
                    Add
                </button>
            </form>
        )
    }
}

export default TodoForm;