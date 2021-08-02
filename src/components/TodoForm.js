import React from "react";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            inputValue:e.target.value
        })
    };

    handleClick = (e)=> {
        e.preventDefault();
        this.props.handleAddTask(this.state.inputValue);
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChanges}type="text" name="task" />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}

export default TodoList;