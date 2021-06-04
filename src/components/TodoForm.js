import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText)
        this.setState({
            todoText:'',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo-input">Add Todo: </label>
                <input id="todo-input" value={this.state.todoText} onChange={this.handleChanges} name="todoText"></input>
                <button>Add Todo</button>
            </form>
        )
    }
}
