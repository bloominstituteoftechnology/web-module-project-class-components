import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            newTaskName: "",
        };
    }

    handleChanges = (e) => {
        this.setState({
            newTaskName: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.newTaskName);
    };

    render() {
        return (
            <div>
                <h3>Add things to do:</h3>
                <form onSubmit = {this.handleSubmit}>
                    <input
                            type="text"
                            onChange={this.handleChanges}
                            value={this.state.newTaskName}
                            />
                            <button>Add Task</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;