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
            input: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.addNewTodo(this.state.input)
        // console.log('click, todo form');
        this.setState({
            ...this.state,
            input: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        className='form-input'
                        onChange={this.handleChange}
                        type='text'
                        name='todo'
                        placeholder="What's next?"
                        value={this.state.input}
                    />
                    <button
                        className='add-btn'
                        onClick={this.handleClick}>
                    Add Todo
                    </button>
                </form>
            </div>
        )
    }
}


export default TodoForm