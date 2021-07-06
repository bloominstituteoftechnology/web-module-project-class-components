import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }
    
    handleChanges = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.todoText)
        this.setState({
            todoText: '',
        })
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = 'todo-input'>Add a task: </label>
                <input
                    id = 'todo-input' 
                    value = {this.state.todoText} 
                    name = 'todoText'
                    onChange = {this.handleChanges} 
                />
                <button> Add it</button>
            </form>
        )
    }
}