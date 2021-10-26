import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:''
        }
    }

    handleChange =(evt) =>{
        this.setState({
            ...this.state,
            input: evt.target.value
        });
    };
    handleSubmit = (evt) =>{
        evt.preventDefault();
        this.props.handleAddTodo(this.state.input);
        this.setState({
            ...this.state,
            input: ''
        });
        
    }
    handleClear = (evt)=>{
        evt.preventDefault();
        this.props.clearItems();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input
                type="text"
                name="todo"
                onChange={this.handleChange}
                placeholder="Add a 'todo' item"
                value={this.state.input}
                />
                <button>Submit</button>
                <button onClick={this.handleClear}>Clear</button>
            </form>
        );
    }
}

export default TodoForm;