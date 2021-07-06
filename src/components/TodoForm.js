import React from "react";

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todotext: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.todotext)
        this.setState({
            todotext: "",
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.clearDone();
    }


    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="todo-input">Add a task</label>
                <input
                type="text"
                onChange={this.handleChange}
                name="todotext"
                value={this.state.todotext}
                />
                <button>Add</button>
            </form>
            <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}

export default ToDoForm;