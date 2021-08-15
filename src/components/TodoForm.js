import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask:""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTask);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        )
    }
}



export default TodoForm;