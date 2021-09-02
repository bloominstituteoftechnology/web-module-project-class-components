import React from "react"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }

    // constrol input by state
    handleInputValueChanges = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };
    // submit Form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleTodoAdd(this.state.inputValue);
        this.setState({
            input: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> New TODO:
                    <input
                        name="name"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputValueChanges}
                    />
                </label>
                <button className="AddTodoBtn" onClick={this.props.handleTodoAdd}>ADD</button>
                <button className="CompletedBtn" onClick={this.props.handleCompletedTodos}>Clear Finished</button>
            </form>
        )
    }
}

export default TodoForm;