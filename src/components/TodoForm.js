import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state ={
            newTask: '',
            
        }
    }

    handleInput = e =>{
        this.setState({
            newTask: e.target.value,
            
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.newTask);
        console.log(this.state);
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.newTask} onChange={this.handleInput}/>
                <button>Add Task</button>
                {/* <button>Clear Completed Task</button> */}
            </form>
        );
    }
}

export default TodoForm;