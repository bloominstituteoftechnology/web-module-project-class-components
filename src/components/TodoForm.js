import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDo:''
        }
    }

    handleChanges = e => {
        this.setState({
            newToDo: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
         
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newToDo} type="text" todo="todo" onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;