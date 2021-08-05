import React, { Component } from 'react'

export class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.setState({ todo: '' });
        this.props.addTodo(this.state.todo, e)
    }

    render() {
        return (
            <form onSubmit={this.submitTodo} >
                <input 
                type= 'text'
                name='todo'
                value={this.state.todo}
                onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm