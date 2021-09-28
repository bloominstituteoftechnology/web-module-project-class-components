import React from "react";

class TodoForm extends React.Component
{
    // Constructor with state
    constructor()
    {
        super();
        this.state = {
            input: ""
        };
    }

    handleChanges = e =>
    {
        console.log('this is TodoForm: ', e.target.value);
        this.setState({
            input: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.handleAddTask(this.state.input);
    };

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type="text" name="item" />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;