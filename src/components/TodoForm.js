import React from 'react';

class TodoForm extends React.Component {
    // Constructor with State //
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = evt => {
        this.setState({
            input: evt.target.value
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addTodo(this.state.input);
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='todo' onChange={this.handleChanges} />
                <button>
                    Add To-Do
                </button>
            </form>
        )
    }
}

export default TodoForm;