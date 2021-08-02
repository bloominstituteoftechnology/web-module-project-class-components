import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state= {
            inputValue:""
        }
    }
    handleChanges = e =>{
        this.setState({
            ...this.state, inputValue:e.target.value
        })
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.props.handleAddTodo(this.state.inputValue);
    }

    render(){
        return(
            <form>
                <input onChange={this.handleChanges}type="text" name="item"/>
                <button onClick={this.handleClick}>Add Task To-do</button>
            </form>
        );
    }
}

export default TodoForm;