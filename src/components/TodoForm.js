import React from 'react'

class TodoForm extends React.Component {
    constructor () {
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

    handleSubmit = e => {
        e.preventDefault();
        // console.log('handleSubmit click');
        this.props.addNewTodo(this.state.input);
    }

    render () {
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleChange}
                        name='todo'
                        type='text'
                    />
                    <button onClick={this.handleSubmit}>
                        Add item to list
                    </button>                   
                </form>
            </div>
        )
    }
}

export default TodoForm