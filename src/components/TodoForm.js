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
            inputValue: "",
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> New TODO:
                        <input
                            name="name"
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleInputValueChanges}
                        />
                    </label>
                    <button className="AddTodoBtn">ADD</button>
                </form>
                <button className="CompletedBtn" onClick={this.props.handleCompletedTodos}>Clear Finished</button>
            </div>
        )
    }
}

export default TodoForm;