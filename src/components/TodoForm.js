import { render } from '@testing-library/react'
import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }


    handleChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addTodo(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='todo'
                />
                <button>Add Todo!</button>
            </form>
        )
    }

}
export default TodoForm