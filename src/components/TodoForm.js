import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = evt => {
        this.setState({
            input: evt.target.value
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addItem(this.state.input);
    }
    render() {
        return( 
            <form>
                <input 
                    type = "text"
                    name = "item"
                    onChange = {this.handleChanges}
                />
    
                <button onClick = {this.handleSubmit}>Add Todo</button>
                <button onClick = {this.props.clearCompleted}>Clear Completed</button>
            </form>
            
        )
    };
};


export default TodoForm;