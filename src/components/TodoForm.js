import React from 'react';
import './Todo.css';


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = e => {
        const input = document.querySelector('.todoItem');
        e.preventDefault();
        this.props.handleAdd(this.state.input)
        input.value = '';
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input type = 'text' placeholder = '...todo' className = 'todoItem' onChange = { this.handleChange } />
                <button onClick = { this.handleClick }>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm;