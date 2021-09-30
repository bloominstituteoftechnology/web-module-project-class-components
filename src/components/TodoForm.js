import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: "",
        })
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="todo-input">Add Todo</label>
            <input 
                id="todo-input"
                type="text" 
                name="todoText" 
                placeholder="...todo" 
                value={this.state.todoText} 
                onChange={this.handleChange} 
            />
            <button>Add Todo</button>
          </form>
        );
    }

}

export default TodoForm;