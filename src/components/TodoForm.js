import React from 'react';

class TodoForm extends React.Component {
    // @param {Record<string, any>} props
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
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.input)
    }

    render() {
        console.log(this.state.input)
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="task" />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;