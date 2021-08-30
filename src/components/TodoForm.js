import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.addNewTodo(this.state.input)
        // console.log('click, todo form');
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        name='todo'
                        placeholder="What's next?"
                        value={this.state.input}
                    />
                    <button onClick={this.handleClick}>
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}


export default TodoForm