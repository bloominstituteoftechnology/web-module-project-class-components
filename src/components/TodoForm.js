import React from "react";

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }


    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.input);
    }

    render() {
        console.log(this.state.input);
        return (
            <form onSubmit={this.handleSubmit}>
                
                <div>
                <input 
                placehoder="Add todo task" 
                onChange={this.handleChanges} 
                type="text" 
                name="todo" 
                />

                </div>
                <div>
                <button>Add To Do</button>
                </div>
                
            </form>
        );
    }
}

export default TodoForm;