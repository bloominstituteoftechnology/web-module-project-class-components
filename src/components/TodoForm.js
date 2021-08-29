import React from "react";
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    //The state starts as an empty string. 
    //the handeChanges fuction deals with grabing what the user inputs to the field. it doesn't "submit" that imput it just "collects" it and changes the state to the inputed data from th eempty string to whatever the user types in. 
    handleChanges = e => {
        // console.log('User Input', e.target.value);
        this.setState({
            input: e.target.value
        });

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.input);
    }
    render() {
        // console.log('this.state.input TodoForm.js', this.state.input);
        return (
            <form>
                <input onChange={this.handleChanges} type="text" name="todo" placeholder="type task here " />
                <button>Add/Submit Todo</button>
            </form>
        );
    }
}

export default TodoForm;