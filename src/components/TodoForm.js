import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }
    render() {
        return (
            <form>
                <label htmlFor="todo-input">Add Todo: </label>
                <input id="todo-input"></input>
            </form>
        )
    }
}
